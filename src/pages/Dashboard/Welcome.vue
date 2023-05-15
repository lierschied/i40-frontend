<script setup lang="ts">
import {useUserStore} from "../../stores/user.ts";

const {user} = useUserStore();
const style = {
  "background-image": `url(${user.icon})`,
}
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content rounded-md text-center bg-cover p-0" :style="style">
      <div class="max-w-md backdrop-blur-md rounded-md p-5">
        <h1 class="text-5xl font-bold">{{ $t('message.welcome_back', {msg: user.name}) }}</h1>
        <div class="flex justify-center py-6 avatar">
          <div class="w-24 rounded shadow-lg shadow-primary">
            <img alt="user icon" :src="user.icon" />
          </div>
        </div>
        <!--        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>-->
        <router-link :to="{name: 'dashboard.stations'}" class="btn btn-primary">Get Started</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>