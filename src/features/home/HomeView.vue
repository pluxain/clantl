<script setup lang="ts">
import { ClantlLocale } from "#components";
import * as t from "#locales/messages";
import { locales } from "#locales/runtime";
</script>
<template>
  <section class="mx-4 mt-8 md:mx-36">
    <h1 class="text-center text-4xl">
      <abbr :title="t['clantl.moto']()">clantl</abbr>
    </h1>
    <div class="mt-8 flex flex-col gap-2 md:text-lg">
      <div v-for="locale in locales" :key="locale">
        <h2 class="my-4 text-3xl font-bold">
          <ClantlLocale :locale="locale" />
        </h2>
        <div>
          <RouterLink
            :to="{
              name: 'checklist',
              params: { locale, realm: 'anesthesie', step: 'start' },
            }"
            class="underline"
            >{{
              t["flow.start_link"](
                { realm: "anesthesie" },
                { locale },
              )
            }}</RouterLink
          >
        </div>
      </div>
    </div>
  </section>
</template>
