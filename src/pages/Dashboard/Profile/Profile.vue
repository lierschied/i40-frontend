<script setup lang="ts">

import ThemePicker from "../../../components/ThemePicker.vue";
import {useUserStore} from "../../../stores/user.ts";

const {user} = useUserStore();

</script>

<template>
  <div class="flex flex-col justify-center">

    <div class="grid grid-cols-1 justify-items-center p-5 border-y">

      <div class="my-2 w-96">
        <div class="form-control">
          <label class="label">
            <span class="label-text">{{ $t('profile.email') }}</span>
          </label>
          <input disabled type="text" :placeholder="user.email" class="input input-bordered w-full max-w-xs"/>
        </div>
      </div>

      <div class="my-2 w-96">
        <div class="form-control">
          <label class="label">
            <span class="label-text">{{ $t('profile.name') }}</span>
          </label>
          <input type="text" :value="user.name" class="input input-bordered w-full max-w-xs"/>
        </div>
      </div>

      <div class="flex my-2 w-96">
        <div class="avatar">
          <div class="w-24 rounded">
            <img alt="user icon" :src="user.icon"/>
          </div>
        </div>

        <div class="ml-2 form-control">
          <label class="label">
            <span class="label-text">{{ $t('profile.icon') }}</span>
          </label>
          <input type="text" :value="user.icon" class="input input-bordered w-full max-w-xs"/>
        </div>
      </div>
    </div>

    <div class="border-y grid justify-items-center grid-cols-4 gap-2 p-5">
      <div class="my-5 flex justify-center col-span-full">{{ $t('profile.choose_theme') }}</div>
      <ThemePicker/>
    </div>
  </div>
</template>

<style scoped>

</style>