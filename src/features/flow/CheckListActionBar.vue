<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ClantlButton } from "#components";
import * as t from "#locales/messages";

const emit = defineEmits<(e: "reset") => void>();
</script>

<template>
  <div class="absolute top-0 left-0 mt-2 ml-2 flex gap-2 text-2xl text-white">
    <RouterLink :to="{ name: 'home' }" :title="t.go_back_home()">
      {{ "\u27ea" }}
    </RouterLink>
  </div>
  <div class="absolute top-0 right-0 mt-2 mr-2 flex gap-2 text-2xl text-white">
    <ClantlButton
      severity="primary"
      :hint="t.btn_reset_checklist_hint()"
      type="button"
      @click="emit('reset')"
    >
      {{ "\u21BB" }}
    </ClantlButton>
  </div>
</template>
