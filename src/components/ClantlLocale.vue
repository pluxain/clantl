<script setup lang="ts">
import type { Locale } from "@types";

type Props = {
  locale: Locale;
};

defineProps<Props>();
</script>

<template>
  <span class="locale">{{ locale }}</span>
</template>

<style scoped>
.locale::before {
  content: "[";
}

.locale::after {
  content: "]";
}
</style>
