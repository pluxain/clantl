<script setup lang="ts">
import { ClantlPendingIndicator } from "@components";
import { languageTag } from "@locales/runtime";
import { CheckList } from ".";
import { useRoute } from "vue-router";

const { params } = useRoute("checklist");
const { realm, step } = params;
const uiLocale = languageTag();
</script>

<template>
  <Suspense>
    <CheckList :realm="realm" :step="step" :ui-locale="uiLocale" />
    <template #fallback
      ><section class="flex items-center justify-center text-3xl font-bold">
        <ClantlPendingIndicator class="h-48" /></section
    ></template>
  </Suspense>
</template>
