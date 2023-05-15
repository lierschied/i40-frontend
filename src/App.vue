<script setup lang="ts">
document.querySelector('html').dataset.theme = localStorage.theme || 'bumblebee';
</script>

<template>
  <router-view></router-view>
</template>