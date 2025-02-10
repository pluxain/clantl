<script setup lang="ts">
import { onErrorCaptured, ref, type Ref } from "vue";
import { HttpNotFoundError, type ApiError } from "@api/ApiError";
import { ClantlNotification, ClantlPendingIndicator } from "@components";
import * as t from "@locales/messages";
import { CheckList } from ".";
import { useRoute } from "vue-router";

const { realm } = useRoute("checklist").params;

const error: Ref<Error | null> = ref(null);
const isDone = ref(false);

onErrorCaptured((err: ApiError) => {
  if (err instanceof HttpNotFoundError) {
    isDone.value = true;
  } else {
    error.value = err;
  }
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
    <ClantlNotification
      v-else-if="isDone"
      severity="success"
      class="flex items-center justify-center text-3xl font-bold"
    >
      {{ t.flow_done({ realm }) }}
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
