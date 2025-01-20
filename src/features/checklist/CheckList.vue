<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { ClantlNotification } from "@components";

type Checklist = {
  completed: boolean;
  items: KillerItem[];
  realm: string;
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
</script>

<template>
  <section class="border-b-1 border-2 border-secondary">
    <div class="border-b-2 border-secondary bg-warning p-4 text-white">
      <h2 class="text-center text-4xl uppercase">{{ list.realm }}</h2>
      <h3 class="text-center text-4xl font-bold uppercase">
        {{ "<" }} {{ list.step }} {{ ">" }}
      </h3>
    </div>
    <dl class="text-2xl">
      <div
        v-for="(item, index) in list.items"
        :key="index"
        class="grid cursor-pointer grid-cols-[minmax(1px,_1fr),_25%]"
        @click="check(index)"
      >
        <dd
          class="p-4 font-bold uppercase"
          :class="[
            item.verified
              ? 'border-b border-success text-success'
              : 'border-b border-secondary text-black',
          ]"
        >
          {{ item.label }}
        </dd>
        <dt
          class="p-4 font-bold uppercase"
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
    <div class="text-center text-lg">
      &copy; Paul Coppens &amp; Fabrice Levoyer
    </div>
  </section>
  <ClantlNotification
    v-if="list.completed"
    severity="success"
    css="p-8 text-center"
  >
    <h4 class="mb-4 text-3xl font-bold uppercase">
      liste de vérification complétée !
    </h4>
    <p class="text-3xl font-bold uppercase">prêt pour l'induction</p>
    <p class="text-4xl font-bold motion-safe:animate-bounce">{{ "\u2304" }}</p>
  </ClantlNotification>
</template>
