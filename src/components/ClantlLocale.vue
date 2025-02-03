<script setup lang="ts">
import type { Locale } from "@types";

type Props = {
  locale: Locale;
  hint?: string;
};

defineProps<Props>();
</script>

<template>
  <span class="locale" :title="hint">{{ locale }}</span>
</template>

<style scoped>
.locale::before {
  content: "[";
}

.locale::after {
  content: "]";
}
</style>
