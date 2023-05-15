<template>
  <Line :data="data" :options="options"/>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import {CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip} from 'chart.js'
import {Line} from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'
import {getRandomInt} from './chartConfig.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const options = chartConfig.options
const data = ref({
  labels: [],
  datasets: [
    {
      stepped: true,
      data: []
    }
  ]
})

onMounted(() => {
  setInterval(() => {
    data.value = {
      labels: [...data.value.labels, "val_" + getRandomInt()],
      datasets: [
        {
          stepped: true,
          data: [...data.value.datasets[0].data || [], getRandomInt()]
        }
      ]
    }
  }, 3000)
})
</script>
