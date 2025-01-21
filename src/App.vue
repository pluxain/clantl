<script setup lang="ts">
import { CheckList } from "@features/checklist";
</script>
<template>
  <main class="flex h-screen w-screen flex-col p-4">
    <h1 class="mb-4 text-center text-4xl font-bold">
      <abbr title="Check-Lists are not Todo-Lists">clantl</abbr>
    </h1>
    <CheckList />
  </main>
</template>
