<script setup lang="ts">
type KillerItem = {
  keyword: string;
  label: string;
};
const group = "Check-List - Anesthésie";
const step = "Avant Induction";
const items: KillerItem[] = [
  { label: "matériel d'intubation", keyword: "vérifié" },
  { label: "oxygène", keyword: "disponible" },
  { label: "circuit / Ballon de réanimation", keyword: "testé" },
  { label: "valve d'échappement", keyword: "Ouverte" },
  { label: "ballonnet sonde endotrachéale", keyword: "étanche" },
  { label: "cathéter", keyword: "fonctionnel" },
  { label: "procédure de réanimation", keyword: "prête" },
  { label: "responsable de la surveillance", keyword: "nommé" },
];
</script>

<template>
  <section class="border-2 border-black">
    <div class="bg-gray-400 p-4 text-white">
      <h2 class="text-center text-4xl uppercase">{{ group }}</h2>
      <h3 class="text-center text-3xl uppercase">{{ step }} ></h3>
    </div>
    <dl class="divide-y text-lg">
      <div
        v-for="({ keyword, label }, index) in items"
        :key="index"
        class="grid grid-cols-[minmax(1px,_1fr),_25%] gap-4"
      >
        <dd class="p-4 font-bold uppercase">
          {{ label }}
        </dd>
        <dt class="bg-gray-100 p-4 text-center font-bold uppercase">
          {{ keyword }}
        </dt>
      </div>
    </dl>
  </section>
</template>
