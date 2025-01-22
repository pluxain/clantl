<script setup lang="ts">
import type { Severity } from "@types";

type Props = {
  severity: Severity;
  css?: string;
};

defineProps<Props>();
</script>

<template>
  <div
    class="notification my-2 border-l-4 p-2 text-left"
    :class="[
      {
        'border-danger-accent bg-danger-solid text-danger':
          severity === 'danger',
        'border-info-accent bg-info-solid text-info': severity === 'info',
        'border-primary-accent bg-primary-solid text-primary':
          severity === 'primary',
        'border-secondary-accent bg-secondary-solid text-secondary':
          severity === 'secondary',
        'border-success-accent bg-success-solid text-success':
          severity === 'success',
        'border-warning-accent bg-warning-solid text-warning':
          severity === 'warning',
      },
      severity,
      css,
    ]"
  >
    <slot />
  </div>
</template>
