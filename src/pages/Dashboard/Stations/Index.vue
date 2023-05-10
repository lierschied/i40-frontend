<script setup lang="ts">

</script>

<template>
  <div class="flex justify-center tabs mb-4">
    <router-link to="/station/pallet-storage/overview" class="tab tab-bordered" active-class="tab-active">Overview</router-link>
    <router-link to="/station/pallet-storage/sensors" class="tab tab-bordered" active-class="tab-active">Sensors</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>

</style>