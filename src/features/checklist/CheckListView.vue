<script setup lang="ts">
import { ClantlPendingIndicator } from "@components";
import { setLanguageTag } from "@locales/runtime";
import { CheckList } from ".";
import { useRoute } from "vue-router";

const { params } = useRoute("checklist");
const { realm, step, locale } = params;
setLanguageTag(locale);
</script>

<template>
  <RouterView>
    <Suspense>
      <CheckList :realm="realm" :step="step" :locale="locale" />
      <template #fallback
        ><section class="flex items-center justify-center text-3xl font-bold">
          <ClantlPendingIndicator class="h-48" /></section
      ></template>
    </Suspense>
  </RouterView>
</template>
