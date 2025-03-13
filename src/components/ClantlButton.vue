<script setup lang="ts">
import type { Severity } from "#types";

type Props = {
  severity: Severity;
  hint?: string;
};

defineProps<Props>();
</script>

<template>
  <button
    type="button"
    class="button rounded-md px-1"
    :title="hint"
    :class="[
      {
        'bg-danger text-white':
          severity === 'danger',
        'bg-info text-black': severity === 'info',
        'bg-primary text-white':
          severity === 'primary',
        'bg-secondary text-white':
          severity === 'secondary',
        'bg-success text-white':
          severity === 'success',
        'bg-warning text-black':
          severity === 'warning',
      },
      severity,
    ]"
  >
    <slot />
  </button>
</template>
