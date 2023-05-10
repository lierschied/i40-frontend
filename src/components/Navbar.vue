<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";
import {signOut} from "../auth.ts";
const {locale} = useI18n();
const router = useRouter()

const setLocale = () => {
  localStorage.setItem('locale', locale.value);
}

const logout = () => {
  signOut();
  router.push('/login')
}

</script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
<!--      <a class="btn btn-ghost normal-case text-xl">daisyUI</a>-->
      <label for="my-drawer" class="btn btn-square btn-sm btn-outline">
        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"></path>
        </svg>
      </label>

    </div>

    <div class="navbar-center">
    </div>

    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://plus.unsplash.com/premium_photo-1677507321948-d3f8b80fe6d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
          </div>
        </label>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a @click="logout">Logout</a></li>
        </ul>
      </div>
    </div>
    <select class="ml-2 select" v-model="$i18n.locale" @change="setLocale">
      <option v-for="x in $i18n.availableLocales" :key="`locale-${x}`" :value="x" >{{ x }}</option>
    </select>

  </div>
</template>

<style scoped>

</style>