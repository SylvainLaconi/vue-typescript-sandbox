<template>
  <div>
    <h1>Page test</h1>
    <TestItem @message-sent="updateMessage" />
    <br />
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import TestItem from "./TestItem.vue";

const message: Ref<string> = ref("Pas de message");

const updateMessage = (payload: string): void => {
  message.value = payload;
};
</script>

<style></style>
