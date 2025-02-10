<script setup lang="ts">
import { onErrorCaptured, ref, type Ref } from "vue";
import type { ApiError } from "@api/ApiError";
import { ClantlNotification, ClantlPendingIndicator } from "@components";
import { CheckList } from ".";

const error: Ref<Error | null> = ref(null);

onErrorCaptured((err: ApiError) => {
  error.value = err;
  // Note: we stop error propagation
  return false;
});
</script>

<template>
  <RouterView :key="$route.fullPath">
    <ClantlNotification
      v-if="error"
      severity="danger"
      class="flex items-center justify-center text-3xl font-bold"
    >
      {{ error }}
    </ClantlNotification>
    <Suspense v-else>
      <CheckList />
      <template #fallback
        ><section class="flex items-center justify-center text-3xl font-bold">
          <ClantlPendingIndicator class="h-48" /></section
      ></template>
    </Suspense>
  </RouterView>
</template>
