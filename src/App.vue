<template>
  <div class="wrapper">
    <vue3-cron v-model="expression" :locale="locale" />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Vue3Cron from './components/Cron.vue';

const expression = ref('* * * * * ?');
const locale = ref('cn');

watchEffect(() => {
  console.log('App watchEffect expression: ', expression.value);
});

watchEffect(() => {
  console.log('App watchEffect locale: ', locale.value);
});
</script>

<style scoped>
.wrapper {
  padding: 100px;
}
</style>
