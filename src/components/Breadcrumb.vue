<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();

</script>

<template>
  <div class="text-sm breadcrumbs hidden md:block">
    <ul>
      <template v-for="(breadcrumb, idx) in route.meta.breadcrumbs"
                :key="idx">
        <li>
          <router-link
              class="capitalize"
              :to="{name: breadcrumb, params: route.params}">
            {{ $t('page.' + breadcrumb.replaceAll(".", "_"), route.params) }}
          </router-link>
        </li>
      </template>
      <li>
        <span class="font-bold capitalize">
          {{ $t('page.' + route.name.replaceAll(".", "_"), route.params).replaceAll("_", " ") }}
        </span>
      </li>
    </ul>
  </div>

</template>
