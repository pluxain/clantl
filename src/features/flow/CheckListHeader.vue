<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ClantlButton } from "#components";
import * as t from "#locales/messages";
import type { Realm, Step } from "#types";

type Props = {
  name: string;
  realm: Realm;
  step: Step;
};

defineProps<Props>();

const emit = defineEmits<(e: "reset") => void>();
</script>

<template>
  <div class="header grid grid-cols-8 bg-warning p-4 text-white uppercase">
    <div class="flex items-center justify-start font-bold text-4xl">
      <RouterLink :to="{ name: 'home' }" :title="t.go_back_home()">
        {{ "\u27ea" }}
      </RouterLink>
    </div>

    <div class="col-span-6">
      <h2 class="flex items-center justify-center gap-4 text-3xl">
        <span class="realm">{{ realm }}</span>
        <span class="step">{{ step }}</span>
      </h2>
      <h4 class="mt-4 text-center text-4xl font-bold">
        <span class="name">{{ name }}</span>
      </h4>
    </div>

    <div class="flex items-center justify-end font-bold text-4xl">
      <ClantlButton
        severity="primary"
        :hint="t.btn_reset_checklist_hint()"
        type="button"
        @click="emit('reset')"
      >
        {{ "\u21BB" }}
      </ClantlButton>
    </div>
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
