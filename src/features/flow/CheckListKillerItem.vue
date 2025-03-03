<script setup lang="ts">
import type { KillerItem } from "#types";

type Props = {
  isCurrent: boolean;
  item: KillerItem;
};

defineProps<Props>();

const emit = defineEmits<(e: "verified") => void>();
</script>

<template>
  <div
    class="item grid grid-cols-[minmax(1px,1fr)__25%]"
    :class="[
      {
        'border-secondary cursor-pointer border-4': isCurrent,
        'cursor-not-allowed opacity-50': !item.verified && !isCurrent,
      },
    ]"
    @click="emit('verified')"
  >
    <dd
      class="label grid grid-cols-[40px_auto_1fr] gap-4 p-4 font-bold uppercase"
      :class="[
        item.verified
          ? 'border-success text-success border-b'
          : 'border-secondary border-b text-black',
      ]"
    >
      <div class="flex items-center">
        <span v-if="item.verified">{{ "\u2713" }}</span>
      </div>
      <div class="flex items-center">{{ item.label }}</div>
      <div class="overflow-hidden">
        {{ "&nbsp;\u2218&nbsp;".repeat(100) }}
      </div>
    </dd>
    <dt
      class="keyword flex items-center p-4 font-bold uppercase"
      :class="[
        item.verified
          ? 'bg-success border-b border-white text-white'
          : 'border-secondary bg-secondary-accent border-b',
      ]"
    >
      {{ item.keyword }}
    </dt>
  </div>
</template>
