<script setup lang="ts">
import {ref} from "vue";
import {useTimeAgoStore} from "../../stores/timeAgo.ts";
import {get} from "../../api.ts";

const {timeAgo} = useTimeAgoStore();

const data = ref(null);
const performance = ref(null);
const current_op = ref(null);

get("/api/v1/measurements").then(r => r.json().then((json) => {
  data.value = json;
  performance.value = json.systems.cps1.performance;
  current_op.value = json.systems.cps1.current_op;
}));

</script>

<template>
  <div class="flex flex-col justify-center">
    <div class="flex justify-center">
      <h1 class="text-xl font-bold">{{ $t('i40.stations.performance') }}</h1>
    </div>
    <div class="flex my-5 justify-center">
      <div v-if="data !== null" class="stats shadow">
        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg class="inline-block w-8 h-8 stroke-current" fill="none" stroke="currentColor" stroke-width="1.5"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"></path>
            </svg>
          </div>
          <div class="stat-title">{{ $t('i40.stations.current') }}</div>

          <div class="stat-value">{{ performance.current }}</div>
          <div class="stat-desc">The current performance</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg class="inline-block w-8 h-8 stroke-current" fill="none" stroke="currentColor" stroke-width="1.5"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"></path>
            </svg>
          </div>
          <div class="stat-title">{{ $t('i40.stations.theoretical') }}</div>
          <div class="stat-value">{{ performance.theoretical }}</div>
          <div class="stat-desc">...</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg class="inline-block w-8 h-8 stroke-current" fill="none" stroke="currentColor" stroke-width="1.5"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path>
            </svg>
          </div>
          <div class="stat-title">{{ $t('i40.stations.trend') }}</div>
          <div class="stat-value">{{ performance.trend }}</div>
          <div class="stat-desc">...</div>
        </div>

      </div>
    </div>

    <!-- NEXT -->

    <div class="flex justify-center">
      <h1 class="text-xl font-bold">{{ $t('i40.stations.current_op') }}</h1>
    </div>

    <div class="flex my-5 justify-center">
      <div v-if="data !== null" class="stats shadow">

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg class="inline-block w-8 h-8 stroke-current" fill="none" stroke="currentColor" stroke-width="1.5"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
            </svg>
          </div>
          <div class="stat-title">{{ $t('i40.stations.prod_order_id') }}</div>
          <div class="stat-value">{{ current_op.operation.prod_order_id }}</div>
          <div class="stat-desc">...</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg class="inline-block w-8 h-8 stroke-current" fill="none" stroke="currentColor" stroke-width="1.5"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
            </svg>
          </div>
          <div class="stat-title">{{ $t('i40.stations.start_date') }}</div>

          <div class="stat-value">{{ timeAgo.format(new Date(current_op.operation.target_start_dt)) }}</div>
          <div class="stat-desc">{{ current_op.operation.target_start_dt }}</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg class="inline-block w-8 h-8 stroke-current" fill="none" stroke="currentColor" stroke-width="1.5"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"></path>
            </svg>
          </div>
          <div class="stat-title">{{ $t('i40.stations.open_qty') }}</div>
          <div class="stat-value">{{ current_op.operation.open_qty }}</div>
          <div class="stat-desc">...</div>
        </div>

      </div>
    </div>

    <div class="flex justify-center">
      <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div class="collapse-title text-xl font-medium">
          {{ $t('i40.stations.show_raw_data') }}
        </div>
        <div class="collapse-content">
          <div class="mockup-code w-full bg-primary text-primary-content">
            <pre><code>{{ data }}</code></pre>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>