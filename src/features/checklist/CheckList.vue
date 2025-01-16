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
  checked: boolean;
  keyword: string;
  label: string;
};

const list: Ref<Checklist> = ref({
  completed: false,
  items: [
    { label: "matériel d'intubation", keyword: "vérifié", checked: false },
    { label: "oxygène", keyword: "disponible", checked: false },
    {
      label: "circuit / Ballon de réanimation",
      keyword: "testé",
      checked: false,
    },
    { label: "valve d'échappement", keyword: "Ouverte", checked: false },
    {
      label: "ballonnet sonde endotrachéale",
      keyword: "étanche",
      checked: false,
    },
    { label: "cathéter", keyword: "fonctionnel", checked: false },
    { label: "procédure de réanimation", keyword: "prête", checked: false },
    {
      label: "responsable de la surveillance",
      keyword: "nommé",
      checked: false,
    },
  ],
  realm: "Check-List - Anesthésie",
  step: "Avant Induction",
});

function check(index: number) {
  if (index === 0) {
    list.value.items[index].checked = true;
  } else if (list.value.items[index - 1].checked) {
    list.value.items[index].checked = true;
    if (index === list.value.items.length - 1) {
      list.value.completed = true;
    }
  }
}
</script>

<template>
  <section class="border-2 border-black">
    <div
      :class="[
        list.completed ? 'bg-success text-white' : 'bg-secondary text-black',
      ]"
      class="border-b-2 border-black p-4"
    >
      <h2 class="text-center text-4xl uppercase">{{ list.realm }}</h2>
      <h3 class="text-center text-3xl uppercase">
        {{ "<" }} {{ list.step }} {{ ">" }}
      </h3>
    </div>
    <dl class="divide-y text-lg">
      <div
        v-for="(item, index) in list.items"
        :key="index"
        class="grid grid-cols-[minmax(1px,_1fr),_25%] gap-4"
      >
        <dd class="p-4 font-bold uppercase">
          {{ item.label }}
        </dd>
        <dt
          :class="[
            item.checked ? 'bg-success text-white' : 'bg-secondary-accent',
          ]"
          class="cursor-pointer p-4 text-center font-bold uppercase"
          @click="check(index)"
        >
          {{ item.keyword }}
        </dt>
      </div>
    </dl>
  </section>
  <ClantlNotification
    v-if="list.completed"
    severity="success"
    css="p-8 text-center"
  >
    <h4 class="mb-4 text-3xl font-bold">Check-List Completed !</h4>
    <p class="text-xl">You can now access the next phase</p>
    <p class="text-4xl font-bold motion-safe:animate-bounce">{{ "\u2304" }}</p>
  </ClantlNotification>
</template>
