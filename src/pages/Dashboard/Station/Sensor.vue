<script setup lang="ts">
import {get, post} from "../../../api.ts";
import {useRoute} from "vue-router";
import {onMounted, onUnmounted, ref} from "vue";
import {CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip} from 'chart.js'
import {Line} from 'vue-chartjs'
import {useTimeAgoStore} from "../../../stores/timeAgo.ts";

const route = useRoute();
const data = ref(null);
const {timeAgo} = useTimeAgoStore();

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const min = ref<number>(0);
const max = ref<number>(60);
const sensor_id = ref<string | null>(null);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    axis: 'x'
  },
};


const chartData = ref<{labels: string[], datasets: {}[]}>({
  labels: [],
  datasets: [
    {
      stepped: true,
      label: "",
      data: [],
      borderColor: '#36A2EB',
      backgroundColor: '#9BD0F5',
    }
  ]
});

const updateInterval = 5;
const nextUpdate = ref<number>(5);
const updateHandler = ref<number | null>(null);
const updateDataHandler= ref<number | null>(null);

onMounted(async () => {
  await get(`/api/v1/sensor/${route.params.sensor}`).then(r => r.json()).then(json => sensor_id.value = json.id.replace("sensor:", ""))
  fetchData();

  updateDataHandler.value = setInterval(fetchData, 5000);
  update();
});

onUnmounted(() => {
  clearInterval(<number>updateDataHandler.value);
  clearInterval(<number>updateHandler.value);
})


const update = () => {
  updateHandler.value = setInterval(() => nextUpdate.value = nextUpdate.value - 1, 1000);
}

const fetchData = () => {
  if (sensor_id.value === null) return;
  post(`/api/v1/sensor/${route.params.sensor}/values`, {
    sensor: sensor_id.value,
    to: min.value.toString(),
    from: max.value.toString(),
  })
      .then(r => r.json())
      .then(json => {
        data.value = json;

        const labels = data.value.values.map(e => {
          return new Date(e.server_timestamp).toLocaleTimeString();
        });

        const values = data.value.values.map(e => {
          return parseInt(e.value);
        });

        chartData.value = {
          labels: labels,
          datasets: [
            {
              stepped: true,
              label: <string>route.params.sensor,
              data: values,
              borderColor: '#36A2EB',
              backgroundColor: '#9BD0F5',
            }
          ]
        };
        clearInterval(<number>updateHandler.value);
        nextUpdate.value = updateInterval;
        update();
      })
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex justify-center gap-5">
      <div class="w-52 tooltip tooltip-bottom indicator bg-neutral p-3 rounded"
           :data-tip="$t('i40.stations.sensor_min')">
        <span class="indicator-item indicator-center indicator-bottom badge badge-primary z-0">{{ min }} min</span>
        <span class="font-bold text-neutral-content">{{
            $t('i40.stations.from') }} {{ timeAgo.format(Date.now() - 60 * (1000 * parseInt(min)), 'now')
          }}</span>
        <input v-on:change="fetchData" v-model="min" type="range" min="0" :max="parseInt(max) - 1"
               class="range range-success"/>
        <div class="w-full flex justify-between text-xs px-2">
          <span v-for="i in 6" :key="i">|</span>
        </div>
      </div>
      <div class="w-52 tooltip tooltip-bottom indicator bg-neutral p-3 rounded"
           :data-tip="$t('i40.stations.sensor_max')">
        <span class="indicator-item indicator-center indicator-bottom badge badge-primary z-0">{{ max }} min</span>
        <span class="font-bold text-neutral-content">{{
            $t('i40.stations.to')}} {{ timeAgo.format(Date.now() - 60 * (1000 * parseInt(max)), 'now')
          }}</span>
        <input v-on:change="fetchData" v-model="max" type="range" :min="parseInt(min) + 1" max="1440"
               class="range range-error"/>
        <div class="w-full flex justify-between text-xs px-2">
          <span v-for="i in 6" :key="i">|</span>
        </div>
      </div>

    </div>
    <div class="flex justify-center mt-10">
      <div class="">
        {{ $t('i40.stations.next_update') }}
        <span class="countdown font-mono">
          <span :style="`--value:${nextUpdate};`"></span>
        </span>
      </div>
    </div>
    <div class="flex bg-neutral m-5 md:m-20 sm:m-10 h-96">
      <Line class="bg-white rounded p-2 shadow-xl shadow-neutral" :data="chartData" :options="chartOptions"/>
    </div>

  </div>

</template>

<style scoped>

</style>