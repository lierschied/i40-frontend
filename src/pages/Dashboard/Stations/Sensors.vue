<script setup lang="ts">
import {get} from "../../../api.ts";
import {ref} from "vue";

const data = ref(null);
get('/api/v1/station/Palettenlager/sensors')
    .then(r => r.json())
    .then(json => {
      data.value = json;
    })
</script>

<template>
  <div class="flex justify-center" v-if="data !== null">
    <ul class="flex flex-col m-5" v-for="sensor in data" key="sensor.id">
      <li class="flex flex-row mb-2 shadow border rounded-md flex flex-1 items-center p-4">
        <div class="flex items-center mr-5">{{ sensor.display_name }}</div>
        <div class="text-center">
          <div class="text-xs">{{ sensor.values[sensor.values.length-1].value }}</div>
          <progress class="progress w-56" :value="sensor.values[sensor.values.length-1].value" max="100000"></progress>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>