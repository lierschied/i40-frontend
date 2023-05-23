<script setup lang="ts">
import {get} from "../../api.ts";
import {ref} from "vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n();
const data = ref(null);
get("/api/v1/alarms").then(r => r.json()).then(json => {
  if (json.alarms.length > 0) {
    data.value = json;
  }
});
</script>

<template>
  <div class="flex flex-col items-center">
    <template v-if="data" v-for="(alarm, i) in data.alarms" :key="i">
      <div class="divider"></div>
      <div class="stats shadow bg-info text-info-content">
        <div class="stat">
          <div class="stat-title text-info-content/70">{{ t('alarm.error') }}</div>
          <div class="stat-value text-info-content">{{ alarm.module_id }}</div>
          <div class="stat-desc text-info-content/70">{{
              t('alarm.contains_error', {
                count: alarm.errors.lenght,
                module: alarm.module_id
              }, alarm.errors.length)
            }}
          </div>
        </div>

      </div>
        <template v-for="(error, k) in alarm.errors" :key="k">
          <div class="alert my-2 border border-error-content rounded alert-error shadow-lg w-full md:w-1/2">
            <div>
              <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path>
              </svg>
              <span class="text-error-content">{{ error.code }} | {{ error.msg }}</span>
            </div>
          </div>
        </template>
    </template>
  </div>

</template>

<style scoped>

</style>