<script setup lang="ts">
import * as t from "@locales/messages";
import { availableLanguageTags } from "@locales/runtime";
import { ClantlLocale } from "@components";
</script>
<template>
  <section class="mx-4 mt-8 md:mx-36">
    <h1 class="text-center text-4xl">
      <abbr :title="t.clantl_moto()">clantl</abbr>
    </h1>
    <div class="mt-8 flex flex-col gap-2 md:text-lg">
      <div v-for="locale in availableLanguageTags" :key="locale">
        <h2 class="my-4 text-3xl font-bold">
          <ClantlLocale :locale="locale" />
        </h2>
        <div>
          <RouterLink
            :to="{ name: 'checklist', params: { locale } }"
            class="underline"
            >{{
              t.checklist_link(undefined, { languageTag: locale })
            }}</RouterLink
          >
        </div>
      </div>
    </div>
  </section>
</template>
