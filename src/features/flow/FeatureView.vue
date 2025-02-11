<script setup lang="ts">
import { onErrorCaptured, ref, type Ref } from "vue";
import { RouterLink } from "vue-router";
import { HttpNotFoundError, type ApiError } from "@api/ApiError";
import { ClantlNotification, ClantlPendingIndicator } from "@components";
import * as t from "@locales/messages";
import { CheckList } from ".";
import { useRoute } from "vue-router";

const { realm } = useRoute("checklist").params;

const error: Ref<Error | null> = ref(null);
const isFlowCompleted = ref(false);

onErrorCaptured((err: ApiError) => {
  if (err instanceof HttpNotFoundError) {
    isFlowCompleted.value = true;
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
      v-else-if="isFlowCompleted"
      severity="success"
      class="flex flex-col items-center justify-center gap-4 text-3xl font-bold"
    >
      <p>
        {{ t.flow_done({ realm }) }}
      </p>
      <p>
        <RouterLink
          class="bg-success text-success-solid flex min-w-1/2 flex-col items-center rounded-xl border-2 p-8 text-4xl font-bold"
          :to="{ name: 'home' }"
        >
          {{ "\u27ea" }}
          {{ t.go_back_home() }}
        </RouterLink>
      </p>
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
