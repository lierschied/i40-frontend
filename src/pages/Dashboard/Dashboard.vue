<script setup lang="ts">

import Navbar from "../../components/Navbar.vue";
import Breadcrumb from "../../components/Breadcrumb.vue";
const links = [
  {path: '/', name: 'Dashboard'},
  {path: '/station', name: 'Station'},
  {path: '/reports', name: 'Reports'},
  {path: '/other', name: 'Other Data'},
];
</script>

<template>
  <Navbar />
  <div class="flex px-5"><Breadcrumb/></div>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content content-stretch">

      <router-view></router-view>
    </div>

    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->

        <template v-for="link in links">
          <li class="m-1">
            <router-link :to="link.path" active-class="btn-primary shadow shadow-lg">{{ link.name }}</router-link>
          </li>
        </template>

      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>