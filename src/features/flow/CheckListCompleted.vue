<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ClantlNotification } from "#components";
import * as t from "#locales/messages";
import type { Locale, Realm, Step } from "#types";

type Props = {
  locale: Locale;
  name: string;
  nextStep: Step;
  realm: Realm;
  step: Step;
};

defineProps<Props>();
</script>

<template>
  <ClantlNotification
    severity="success"
    class="flex flex-col items-center justify-center gap-4 text-3xl font-bold uppercase opacity-95"
  >
    <h4>
      <span class="step">{{ step }}</span>
    </h4>
    <h4>
      <span class="name">{{ name }}</span>
      {{ t.checklist_completed() }}
    </h4>
    <div>
      <RouterLink
        class="bg-success text-success-solid flex min-w-1/2 flex-col items-center rounded-xl border-2 p-8 text-4xl font-bold"
        :to="{
          name: 'checklist',
          params: { locale, realm, step: nextStep },
        }"
      >
        <p>
          {{ t.checklist_completed_next() }}
          <span class="step">{{ nextStep }}</span>
        </p>
        <p class="motion-safe:animate-bounce">
          {{ "\u2304" }}
        </p>
      </RouterLink>
    </div>
  </ClantlNotification>
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
