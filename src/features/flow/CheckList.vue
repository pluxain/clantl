<script setup lang="ts">
import { computed, ref } from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";
import { getChecklist } from "@api";
import { setLanguageTag } from "@locales/runtime";
import type { Checklist } from "@types";
import { CheckListActionBar, CheckListCompleted, CheckListHeader } from ".";

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
      <CheckListActionBar
        :locale="locale"
        :list-locale="list.locale"
        @reset="listReset"
      />
      <CheckListHeader
        :name="list.name"
        :realm="list.realm"
        :step="list.step"
      />
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
    <CheckListCompleted
      v-if="completed"
      class="completed"
      :locale="locale"
      :name="list.name"
      :next-step="list.nextStep"
      :realm="list.realm"
      :step="list.step"
    />
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

.completed {
  grid-area: main;
}
</style>
