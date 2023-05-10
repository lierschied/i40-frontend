<script setup lang="ts">

</script>

<template>
  <div class="hero min-h-screen bg-error p-2">
    <div class="hero-content flex-col lg:flex-row bg-error rounded">
      <img src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" class="max-w-sm rounded-lg shadow-2xl hidden lg:block"  alt="404 not found"/>
      <div>
        <h1 class="text-5xl font-bold">404</h1>
        <p class="py-6">{{ $t('error.not_found') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>