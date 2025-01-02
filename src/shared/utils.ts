import { WEEKS, WEEK_INDEX_REGEXP, WEEK_LETTER_REGEXP } from './constants.ts'
import type { LocaleWeek } from '@/i18n'
import I18n from '@/i18n'

/**
 * 生成指定数组.
 *
 * @param min - 区间最小值.
 * @param max - 区间最大值.
 * @param labels - 显示名称.
 */
export function generateSpecifies(
  min: number,
  max: number,
  labels: Array<string>,
): Array<{
  value: number
  label: string
}> {
  const specifies = []

  let index = 0

  for (let specify = min; specify <= max; specify += 1) {
    specifies.push({ value: specify, label: labels ? labels[index] : specify.toString() })
    index += 1
  }

  return specifies
}

/**
 * 日期时间字段补零.
 *
 * @param value - 待补零处理的数字.
 */
export function zerofill(value: number): string {
  const prefix = value < 10 ? '0' : ''

  return `${prefix}${value}`
}

/**
 * 转换星期数字为缩写.
 *
 * @param value - .
 */
export function weekNumberToLetter(value: string): string {
  return value.replace(
    WEEK_INDEX_REGEXP,
    (value) => WEEKS.find(({ index }) => [index].includes(value))?.abbr || value,
  )
}

/**
 * 转换星期缩写为数字.
 *
 * @param value - .
 */
export function weekLetterToNumber(value: string): string {
  return value.replace(
    WEEK_LETTER_REGEXP,
    (value) => WEEKS.find(({ abbr }) => abbr === value)?.index || value,
  )
}

/**
 * 星期字段的 <a-input-number> 组件 formatter 函数.
 *
 * @param value - 当前值 (数字字符串).
 * @param locale - 国际化字段 (语言标识符).
 */
export function formatterWeek(value: string, locale: string): string {
  const weekIndex = parseInt(value, 10)
  if (isNaN(weekIndex) || weekIndex < 0 || weekIndex >= 7) {
    return ''
  }

  const dayKeys = Object.keys(I18n[locale].week) as Array<keyof LocaleWeek>
  const dayKey = dayKeys[weekIndex]

  return I18n[locale].week[dayKey]
}

/**
 * 星期字段的 <a-input-number> 组件 parser 函数.
 *
 * @param value - 当前值 (星期字符串).
 * @param locale - 国际化字段 (语言标识符).
 */
export function parserWeek(value: string, locale: string): number {
  const dayEntries = Object.entries(I18n[locale].week) as [keyof LocaleWeek, string][]
  const dayIndex = dayEntries.findIndex(([, dayName]) => dayName === value)

  return dayIndex >= 0 ? dayIndex : -1
}
