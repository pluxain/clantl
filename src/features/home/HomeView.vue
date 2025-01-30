<script setup lang="ts">
import * as t from "@locales/messages";
</script>
<template>
  <section class="mx-4 mt-8 md:mx-36">
    <h1 class="text-center text-4xl">
      <abbr :title="t.clantl_moto()">clantl</abbr>
    </h1>
    <div class="mt-8 md:text-lg">
      <RouterLink :to="{ name: 'checklist' }" class="underline">{{
        t.checklist_link()
      }}</RouterLink>
    </div>
  </section>
</template>
