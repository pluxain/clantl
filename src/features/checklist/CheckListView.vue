<script setup lang="ts">
import { ClantlPendingIndicator } from "@components";
import { CheckList } from ".";
</script>

<template>
  <RouterView :key="$route.fullPath">
    <Suspense>
      <CheckList />
      <template #fallback
        ><section class="flex items-center justify-center text-3xl font-bold">
          <ClantlPendingIndicator class="h-48" /></section
      ></template>
    </Suspense>
  </RouterView>
</template>
