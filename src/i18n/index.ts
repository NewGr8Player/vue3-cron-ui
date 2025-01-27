import {
  LOCALE_CN,
  LOCALE_EN,
  WEEK,
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
} from '@/shared/constants.ts'

export interface LocaleField {
  second: string
  minute: string
  hour: string
  date: string
  month: string
  week: string
  year: string
}

export interface LocaleFieldAlias {
  second: string
  minute: string
  hour: string
  date: string
  month: string
  week: string
  year: string
}

export interface LocaleType {
  empty: string
  every: string
  unspecific: string
  range: [string, string, string]
  step: [string, string, string]
  well: [string, string]
  weekday: [string, string]
  lastWeekday: string
  lastDayOfDate: string
  lastDayOfWeek: string
  specify: string
}

export interface LocaleWeek {
  [WEEKDAY: string]: string
}

export interface Locale {
  field: LocaleField
  fieldAlias: LocaleFieldAlias
  type: LocaleType
  week: LocaleWeek
  expression: string
  preview: [string, string]
  previewError: string
  copy: string
}

export interface I18nType {
  [LOCALE_TYPE:string]: Locale
}

const I18n: I18nType = {
  [LOCALE_EN]: {
    field: {
      second: 'Second',
      minute: 'Minute',
      hour: 'Hour',
      date: 'Date',
      month: 'Month',
      week: 'Week',
      year: 'Year',
    },
    fieldAlias: {
      second: 'second',
      minute: 'minute',
      hour: 'hour',
      date: 'date',
      month: 'month',
      week: 'week',
      year: 'year',
    },
    type: {
      empty: 'Empty',
      every: 'Every ',
      unspecific: 'Unspecific',
      range: ['From ', ' to ', ''],
      step: ['Start with ', '，execute every', ''],
      well: ['The ', ''],
      weekday: ['Nearest weekday to the ', ' of current month'],
      lastWeekday: 'Last weekday of current month',
      lastDayOfDate: 'Last day of current month',
      lastDayOfWeek: 'Last ',
      specify: 'Specify',
    },
    [WEEK]: {
      [SUNDAY]: 'Sunday',
      [MONDAY]: 'Monday',
      [TUESDAY]: 'Tuesday',
      [WEDNESDAY]: 'Wednesday',
      [THURSDAY]: 'Thursday',
      [FRIDAY]: 'Friday',
      [SATURDAY]: 'Saturday',
    },
    expression: 'The complete expression',
    preview: ['Last ', ' runtimes'],
    previewError: 'This expression is temporarily unparsed!',
    copy: 'Copy',
  },
  [LOCALE_CN]: {
    field: {
      second: '秒',
      minute: '分',
      hour: '时',
      date: '日',
      month: '月',
      week: '周',
      year: '年',
    },
    fieldAlias: {
      second: '秒钟',
      minute: '分钟',
      hour: '小时',
      date: '天',
      month: '个月',
      week: '星期',
      year: '年',
    },
    type: {
      empty: '不指定',
      every: '每',
      unspecific: '不指定',
      range: ['从', '到', ''],
      step: ['从', '开始，每', '执行一次'],
      well: ['当月第', '个'],
      weekday: ['离当月', '号最近的那个工作日'],
      lastWeekday: '当月最后一个工作日',
      lastDayOfDate: '当月最后一天',
      lastDayOfWeek: '当月最后一个',
      specify: '指定',
    },
    [WEEK]: {
      [SUNDAY]: '星期日',
      [MONDAY]: '星期一',
      [TUESDAY]: '星期二',
      [WEDNESDAY]: '星期三',
      [THURSDAY]: '星期四',
      [FRIDAY]: '星期五',
      [SATURDAY]: '星期六',
    },
    expression: '完整表达式',
    preview: ['最近', '次运行时间'],
    previewError: '此表达式暂时无法解析！',
    copy: '复制',
  },
}

export default I18n
