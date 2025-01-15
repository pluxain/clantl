<script setup lang="ts">
import { CheckList } from "@features/checklist";
</script>
<template>
  <main class="m-auto flex h-screen w-1/2 flex-col">
    <h1 class="mb-4 text-center text-4xl font-bold">
      <abbr title="Check-Lists are not Todo-Lists">cnantl</abbr>
    </h1>
    <CheckList />
  </main>
</template>
