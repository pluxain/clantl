<script setup lang="ts">
import * as t from "@locales/messages";
import { availableLanguageTags } from "@locales/runtime";
</script>
<template>
  <section class="mx-4 mt-8 md:mx-36">
    <h1 class="text-center text-4xl">
      <abbr :title="t.clantl_moto()">clantl</abbr>
    </h1>
    <div class="mt-8 flex gap-2 md:text-lg">
      <RouterLink
        v-for="languageTag in availableLanguageTags"
        :key="languageTag"
        :to="{ name: 'checklist', params: { locale: languageTag } }"
        class="underline"
        >{{ t.checklist_link(undefined, { languageTag }) }}</RouterLink
      >
    </div>
  </section>
</template>
