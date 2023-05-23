<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";
import {signOut} from "../auth.ts";
import {useUserStore} from "../stores/user.ts";
import {get} from "../api.ts";
import {onMounted, onUnmounted, ref} from "vue";

const {locale} = useI18n();
const router = useRouter()
const {user} = useUserStore();

const setLocale = () => {
  localStorage.setItem('locale', locale.value);
}

const logout = () => {
  signOut();
  router.push('/login')
}

const alarmCount = ref(0);
const fetchAlarms = async () => {
  get("/api/v1/alarms").then(r => r.json()).then(json => {
    alarmCount.value = json.alarms.map(e => e.errors).flat().length;
  });
}

fetchAlarms();
const alarmInterval = ref<number>(0);

onMounted(() => {
  alarmInterval.value = setInterval(fetchAlarms, 5000);
})

onUnmounted(() => clearInterval(alarmInterval.value));

</script>

<template>
  <nav class="navbar bg-base-100">
    <div class="navbar-start">
      <!--      <a class="btn btn-ghost normal-case text-xl">daisyUI</a>-->
      <label for="my-drawer" class="btn btn-square btn-sm btn-outline">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"></path>
        </svg>
      </label>

    </div>

    <div class="navbar-center">
    </div>

    <div class="navbar-end">
      <template v-if="alarmCount">
        <router-link :to="{name: 'dashboard.alarm'}" class="btn btn-error text-error btn-ghost btn-circle">
          <div class="indicator">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path>
            </svg>
            <span class="badge badge-xs badge-error indicator-item">{{ alarmCount }}</span>
          </div>
        </router-link>
      </template>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img :src="user.icon"/>
          </div>
        </label>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <router-link :to="{name: 'dashboard.profile'}" class="justify-between"
                         active-class="bg-primary text-primary-content">
              Profile
              <span class="badge">New</span>
            </router-link>
          </li>
          <li><a>Settings</a></li>
          <li><a @click="logout">Logout</a></li>
        </ul>
      </div>
    </div>
    <select class="ml-2 select" v-model="$i18n.locale" @change="setLocale">
      <option v-for="x in $i18n.availableLocales" :key="`locale-${x}`" :value="x">{{ x }}</option>
    </select>

  </nav>
</template>

<style scoped>

</style>