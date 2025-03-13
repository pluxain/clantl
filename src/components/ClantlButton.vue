<script setup lang="ts">
import type { Severity } from "#types";

type Props = {
  severity: Severity;
  type: HTMLButtonElement["type"];
  hint?: string;
};

defineProps<Props>();
</script>

<template>
  <button
    class="button rounded-md px-1"
    :title="hint"
    :type="type"
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
