<script setup lang="ts">
import type { Realm, Step } from "#types";

type Props = {
  name: string;
  realm: Realm;
  step: Step;
};

defineProps<Props>();
</script>

<template>
  <div class="header bg-warning p-4 text-white uppercase">
    <h2 class="flex items-center justify-center gap-4 text-3xl">
      <span class="realm">{{ realm }}</span>
      <span class="step">{{ step }}</span>
    </h2>
    <h4 class="mt-4 text-center text-4xl font-bold">
      <span class="name">{{ name }}</span>
    </h4>
  </div>
</template>

<style scoped>
.name::before {
  content: "< ";
}

.name::after {
  content: " >";
}

.step::before {
  content: "| ";
}

.step::after {
  content: " |";
}
</style>
