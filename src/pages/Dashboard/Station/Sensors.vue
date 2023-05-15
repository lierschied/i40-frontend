<script setup lang="ts">
import {get} from "../../../api.ts";
import {ref} from "vue";
import {useRoute} from "vue-router";
import {useTimeAgoStore} from "../../../stores/timeAgo.ts";

const route = useRoute();
const {timeAgo} = useTimeAgoStore();

const data = ref(null);
get(`/api/v1/station/${route.params.station}/sensors`)
    .then(r => r.json())
    .then(json => {
      data.value = json;
    })
</script>

<template>
  <div class="flex justify-center">
    <div class="" v-if="data !== null">
      <div class="grid grid-cols-2 divide-x" v-for="sensor in data" key="sensor.id">
        <router-link :to="{name: 'dashboard.station.sensor', params: {... route.params, sensor: sensor.display_name}}" class="flex flex-col items-start p-5">
          <span class="text-lg capitalize">{{ sensor.display_name.replaceAll('_', ' ') }}</span>
          <div class="flex flex-wrap">
            <span class="badge badge-secondary badge-xs m-1">{{ sensor.display_name }}</span>
            <span class="badge badge-accent badge-xs m-1 tooltip tooltip-bottom md:tooltip-left" :data-tip="'Last updated ' + timeAgo.format(new Date(sensor.values[0].server_timestamp))">
              {{ timeAgo.format(new Date(sensor.values[0].server_timestamp), 'mini') }}
            </span>
          </div>
        </router-link>
        <div class="flex flex-col items-center p-5">
          <div class="text-xs">{{ sensor.values[0].value }}</div>
          <progress class="progress bg-accent w-56" :value="sensor.values[0].value"
                    max="1000"></progress>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>