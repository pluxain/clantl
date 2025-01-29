<script setup lang="ts">
import { computed, ref } from "vue";
import type { Ref } from "vue";
import { ClantlButton, ClantlNotification } from "@components";
import * as t from "@locales/messages";
import type { Checklist } from "@types";

const list: Ref<Checklist> = ref({
  items: [
    { label: "matériel d'intubation", keyword: "vérifié", verified: false },
    { label: "oxygène", keyword: "disponible", verified: false },
    {
      label: "circuit / Ballon de réanimation",
      keyword: "testé",
      verified: false,
    },
    { label: "valve d'échappement", keyword: "Ouverte", verified: false },
    {
      label: "ballonnet sonde endotrachéale",
      keyword: "étanche",
      verified: false,
    },
    { label: "cathéter", keyword: "fonctionnel", verified: false },
    { label: "procédure de réanimation", keyword: "prête", verified: false },
    {
      label: "responsable de la surveillance",
      keyword: "nommé",
      verified: false,
    },
  ],
  nextStep: "Induction",
  realm: "Anesthésie",
  resetCount: 0,
  step: "Avant Induction",
});

const current = computed(
  // @ts-expect-error findLastIndex is recent
  () => list.value.items.findLastIndex(({ verified }) => verified) + 1,
);

const completed = computed(() =>
  list.value.items.every((item) => item.verified),
);

function check(index: number) {
  if (list.value.items[index].verified) {
    return false;
  }

  if (index === 0) {
    list.value.items[index].verified = true;
  } else if (list.value.items[index - 1].verified) {
    list.value.items[index].verified = true;
  }
}

function listReset() {
  list.value.resetCount++;
  list.value.items.forEach((item) => (item.verified = false));
}
</script>

<template>
  <section class="wrapper">
    <div class="checklist relative">
      <ClantlButton
        class="absolute top-0 right-0 mt-2 mr-2 text-2xl"
        severity="primary"
        :title="t.btn_reset_checklist_hint()"
        type="button"
        @click="listReset"
      >
        {{ "\u21BB" }}
      </ClantlButton>
      <div class="header bg-warning p-4 text-white">
        <h2 class="realm realm text-center text-4xl uppercase">
          {{ list.realm }}
        </h2>
        <h3 class="step text-center text-4xl font-bold uppercase">
          {{ list.step }}
        </h3>
      </div>
      <dl class="items text-2xl">
        <div
          v-for="(item, index) in list.items"
          :key="index"
          class="item grid grid-cols-[minmax(1px,1fr)__25%]"
          :class="[
            {
              'border-secondary cursor-pointer border-4': index === current,
              'cursor-not-allowed opacity-50':
                !item.verified && index !== current,
            },
          ]"
          @click="check(index)"
        >
          <dd
            class="label grid grid-cols-[auto_1fr] gap-4 p-4 font-bold uppercase"
            :class="[
              item.verified
                ? 'border-success text-success border-b'
                : 'border-secondary border-b text-black',
            ]"
          >
            <div class="flex items-center">{{ item.label }}</div>
            <div class="overflow-hidden">
              {{ "&nbsp;\u2218&nbsp;".repeat(100) }}
            </div>
          </dd>
          <dt
            class="keyword p-4 font-bold uppercase"
            :class="[
              item.verified
                ? 'bg-success border-b border-white text-white'
                : 'border-secondary bg-secondary-accent border-b',
            ]"
          >
            {{ item.keyword }}
          </dt>
        </div>
      </dl>
      <div class="copyright mt-4 text-center text-lg">
        &copy; Paul Coppens &amp; Fabrice Levoyer
      </div>
    </div>
    <ClantlNotification
      v-if="completed"
      severity="success"
      class="z-10 flex flex-col items-center justify-center opacity-95"
    >
      <!-- eslint-disable vue/no-v-html -->
      <h4
        class="mb-4 text-3xl font-bold uppercase"
        v-html="t.checklist_completed_html({ step: list.step })"
      ></h4>
      <p
        class="text-3xl font-bold uppercase"
        v-html="t.checklist_completed_next_html({ nextStep: list.nextStep })"
      ></p>
      <!-- eslint-enable vue/no-v-html -->
      <p class="text-4xl font-bold motion-safe:animate-bounce">
        {{ "\u2304" }}
      </p>
    </ClantlNotification>
  </section>
</template>

<style>
.wrapper {
  display: grid;
  grid-template-areas: "main";
}

.checklist {
  grid-area: main;
}

.notification {
  grid-area: main;
}

.step::before {
  content: "< ";
}

.step::after {
  content: " >";
}
</style>
