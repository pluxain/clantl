<script setup lang="ts">
import { computed, ref } from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";
import { getChecklist } from "#api";
import { setLocale } from "#locales/runtime";
import type { Checklist } from "#types";
import { CheckListCompleted, CheckListHeader, CheckListKillerItem } from ".";

const { params } = useRoute("checklist");
const { locale, realm, step } = params;
setLocale(locale);
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
  for (const item of list.value.items) {
    item.verified = false;
  }
}
</script>

<template>
  <section class="wrapper">
    <div class="checklist relative">
      <CheckListHeader
        :name="list.name"
        :realm="list.realm"
        :step="list.step"
        @reset="listReset"
      />
      <dl class="items text-2xl">
        <CheckListKillerItem
          v-for="(item, index) in list.items"
          :key="index"
          :is-current="index === current"
          :item="item"
          @verified="check(index)"
        />
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
