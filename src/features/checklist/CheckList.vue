<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
type KillerItem = {
  checked: boolean;
  keyword: string;
  label: string;
};
const group = "Check-List - Anesthésie";
const step = "Avant Induction";
const items: Ref<KillerItem[]> = ref([
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
  { label: "responsable de la surveillance", keyword: "nommé", checked: false },
]);
</script>

<template>
  <section class="border-2 border-black">
    <div class="bg-gray-400 p-4 text-white">
      <h2 class="text-center text-4xl uppercase">{{ group }}</h2>
      <h3 class="text-center text-3xl uppercase">{{ step }} ></h3>
    </div>
    <dl class="divide-y text-lg">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="grid grid-cols-[minmax(1px,_1fr),_25%] gap-4"
      >
        <dd class="p-4 font-bold uppercase">
          {{ item.label }}
        </dd>
        <dt
          :class="[item.checked ? 'bg-green-500 text-white' : 'bg-gray-100']"
          class="cursor-pointer p-4 text-center font-bold uppercase"
          @click.once="item.checked = !item.checked"
        >
          {{ item.keyword }}
        </dt>
      </div>
    </dl>
  </section>
</template>
