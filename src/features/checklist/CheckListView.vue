<script setup lang="ts">
import * as t from "@locales/messages";
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
        <div class="capitalize">{{ t.pending_indicator_text() }}...</div>
      </section></template
    >
  </Suspense>
</template>
