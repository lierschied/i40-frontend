<script setup lang="ts">
import {ref} from "vue";
import {get} from "../../../api.ts";

const stations = ref(null);
get('/api/v1/stations').then(r => r.json())
    .then(json => stations.value = json);
</script>

<template>
  <div class="flex flex-wrap justify-center gap-5">
    <template v-if="stations !== null" v-for="station in stations">
      <div class="card bg-neutral card-compact group w-96 hover:scale-105 transition ease-in-out">
        <figure>
          <img class="blur-sm group-hover:blur-none"
               src="https://images.unsplash.com/photo-1560732488-6b0df240254a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
               alt="car!"/>
        </figure>
        <div class="card-body text-neutral-content">
          <h2 class="card-title capitalize">{{ station.name }}</h2>
          <p>...?</p>
          <div class="card-actions justify-end">
            <router-link class="btn btn-neutral group-hover:btn-primary btn-circle"
                         :to="{ name: 'dashboard.station', params: { station: station.name }}">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>