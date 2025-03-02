<script setup lang="ts">
import AnimatedVerticalBars from "#images/design/animated-vertical-bars.svg";
import * as t from "#locales/messages";
</script>

<template>
  <AnimatedVerticalBars
    class="flex items-center justify-center"
    :title="t.pending_indicator_text()"
  />
</template>
