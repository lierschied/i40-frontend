<script setup lang="ts">

</script>

<template>
  <div class="flex justify-center gap-5 flex-wrap bg-slate-50">
    <div class="card card-compact w-96 glass">
      <figure><img src="https://images.unsplash.com/photo-1560732488-6b0df240254a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="car!"/></figure>
      <div class="card-body">
        <h2 class="card-title">{{ $t('i40.stations.pallet_storage') }}</h2>
        <p>...?</p>
        <div class="card-actions justify-end">
          <router-link class="btn btn-primary btn-circle" to="/station/pallet-storage/overview">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </div>

    <div class="card card-compact opacity-25 w-96">
      <figure><img src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80" alt="car!"/></figure>
      <div class="card-body">
        <h2 class="card-title">Station 2</h2>
        <p>...?</p>
        <div class="card-actions justify-end">
          <button disabled class="btn btn-primary btn-circle">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="card card-compact opacity-25 w-96">
      <figure><img src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80" alt="car!"/></figure>
      <div class="card-body">
        <h2 class="card-title">Station 3</h2>
        <p>...?</p>
        <div class="card-actions justify-end">
          <button disabled class="btn btn-primary btn-circle">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>