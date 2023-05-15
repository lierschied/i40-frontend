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
              :to="{name: breadcrumb, params: route.params}">
            {{ $t('page.' + breadcrumb) }}
          </router-link>
        </li>
      </template>
      <li>
        <span class="text-info-content">
          {{ $t('page.' + route.name) }}
        </span>
      </li>
    </ul>
  </div>

</template>
