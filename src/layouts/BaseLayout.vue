<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import { setLanguageTag } from "@locales/runtime";

const { params } = useRoute("checklist");
const { locale } = params;

setLanguageTag(locale);
</script>

<template>
  <RouterView />
</template>
