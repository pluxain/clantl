<script setup lang="ts">
import { computed, ref } from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";
import { getChecklist } from "@api";
import { ClantlButton, ClantlLocale, ClantlNotification } from "@components";
import * as t from "@locales/messages";
import { setLanguageTag } from "@locales/runtime";
import type { Checklist } from "@types";

const { params } = useRoute("checklist");
const { locale, realm, step } = params;
setLanguageTag(locale);
const checklist = await getChecklist(realm, step);

const list: Ref<Checklist> = ref(checklist);

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
      <div
        class="absolute top-0 left-0 mt-2 ml-2 flex gap-2 text-2xl text-white"
      >
        <RouterLink :to="{ name: 'home' }">
          {{ "\u27ea" }}
        </RouterLink>
      </div>
      <div
        class="absolute top-0 right-0 mt-2 mr-2 flex gap-2 text-2xl text-white"
      >
        <ClantlLocale :locale="locale" :hint="t.ui_locale_hint()" />
        <ClantlLocale :locale="list.locale" :hint="t.checklist_locale_hint()" />
        <ClantlButton
          severity="primary"
          :hint="t.btn_reset_checklist_hint()"
          type="button"
          @click="listReset"
        >
          {{ "\u21BB" }}
        </ClantlButton>
      </div>
      <div class="header bg-warning p-4 text-white uppercase">
        <h2 class="flex items-center justify-center gap-4 text-3xl">
          <span class="realm">{{ list.realm }}</span>
          <span class="step">{{ list.step }}</span>
        </h2>
        <h4 class="mt-4 text-center text-4xl font-bold">
          <span class="name">{{ list.name }}</span>
        </h4>
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
      class="flex flex-col items-center justify-center gap-4 text-3xl font-bold uppercase opacity-95"
    >
      <h4>
        <span class="step">{{ list.step }}</span>
      </h4>
      <h4>
        <span class="name">{{ list.name }}</span>
        {{ t.checklist_completed() }}
      </h4>
      <RouterLink
        class="bg-success text-success-solid flex min-w-1/2 flex-col items-center rounded-xl border-2 p-8 text-4xl font-bold"
        :to="{
          name: 'checklist',
          params: { locale, realm, step: list.nextStep },
        }"
      >
        <p>
          {{ t.checklist_completed_next() }}
          <span class="step">{{ list.nextStep }}</span>
        </p>
        <p class="motion-safe:animate-bounce">
          {{ "\u2304" }}
        </p>
      </RouterLink>
    </ClantlNotification>
  </section>
</template>

<style scoped>
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
  content: "| ";
}

.step::after {
  content: " |";
}

.name::before {
  content: "< ";
}

.name::after {
  content: " >";
}
</style>
