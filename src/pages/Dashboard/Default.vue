<script setup lang="ts">
import {useUserStore} from "../../stores/user.ts";

const {user} = useUserStore();
</script>

<template>
  <div class="hero min-h-full bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">{{ $t('message.welcome_back', {msg: user.name}) }}</h1>
        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <router-link to="/station" class="btn btn-primary">Get Started</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>