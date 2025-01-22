<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { ClantlButton, ClantlNotification } from "@components";

type Checklist = {
  completed: boolean;
  items: KillerItem[];
  realm: string;
  resetCount: number;
  step: string;
};

type KillerItem = {
  verified: boolean;
  keyword: string;
  label: string;
};

const list: Ref<Checklist> = ref({
  completed: false,
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
  realm: "Anesthésie",
  resetCount: 0,
  step: "Avant Induction",
});

function check(index: number) {
  if (index === 0) {
    list.value.items[index].verified = true;
  } else if (list.value.items[index - 1].verified) {
    list.value.items[index].verified = true;
    if (index === list.value.items.length - 1) {
      list.value.completed = true;
    }
  }
}

function listReset() {
  list.value.resetCount++;
  list.value.completed = false;
  list.value.items.forEach((item) => (item.verified = false));
}
</script>

<template>
  <section class="wrapper">
    <div class="checklist relative">
      <ClantlButton
        class="absolute right-0 top-0 mr-2 mt-2 text-2xl"
        severity="primary"
        title="Réinitialiser la liste de vérification"
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
          class="item grid cursor-pointer grid-cols-[minmax(1px,_1fr),_25%]"
          @click="check(index)"
        >
          <dd
            class="label grid grid-cols-[auto_1fr] gap-4 p-4 font-bold uppercase"
            :class="[
              item.verified
                ? 'border-b border-success text-success'
                : 'border-b border-secondary text-black',
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
                ? 'border-b border-white bg-success text-white'
                : 'border-b border-secondary bg-secondary-accent',
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
      v-if="list.completed"
      severity="success"
      class="z-10 flex flex-col items-center justify-center opacity-95"
    >
      <h4 class="mb-4 text-3xl font-bold uppercase">
        liste de vérification complétée !
      </h4>
      <p class="text-3xl font-bold uppercase">prêt pour l'induction</p>
      <p class="text-4xl font-bold motion-safe:animate-bounce">
        {{ "\u2304" }}
      </p>
    </ClantlNotification>
  </section>
</template>

<style lang="postcss">
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
