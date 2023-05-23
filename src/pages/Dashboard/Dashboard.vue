<script setup lang="ts">

import Navbar from "../../components/Navbar.vue";
import Breadcrumb from "../../components/Breadcrumb.vue";
import Footer from "../../components/Footer.vue";
const links = [
  {name: 'dashboard', params: {}, title: 'Dashboard'},
  {name: 'dashboard.stations', params: {}, title: 'Station'},
  {name: 'dashboard.alarm', params: {}, title: 'Alarm'},
];
</script>

<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="flex flex-col min-h-screen">
        <Navbar/>
        <div class="flex px-5">
          <Breadcrumb/>
        </div>
        <div class="flex flex-col my-5 grow">
          <router-view></router-view>
        </div>
        <Footer/>
      </div>
    </div>

    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->

        <template v-for="link in links">
          <li class="m-1">
            <router-link :to="link" exact-active-class="btn btn-primary text-primary-content">{{ link.title }}</router-link>
          </li>
        </template>

      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>