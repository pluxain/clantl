<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import * as t from "@locales/messages";
import { setLanguageTag } from "@locales/runtime";

const { params } = useRoute("checklist");
const { locale } = params;

setLanguageTag(locale);
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Suspense>
        <component :is="Component"></component>

        <template #fallback
          ><section class="flex items-center justify-center text-3xl font-bold">
            <div class="capitalize">{{ t.pending_indicator_text() }}...</div>
          </section></template
        >
      </Suspense>
    </template>
  </RouterView>
</template>
