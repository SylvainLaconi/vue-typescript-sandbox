<template>
  <div>
    <p>Test item</p>
    <form id="myForm" v-on:submit.prevent="sendMessage">
      <input type="text" v-model="message" />
      <input type="submit" />
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";

const message: Ref<string> = ref("");

const emit = defineEmits<{ (e: "message-sent", message: string): void }>();

const sendMessage = (): void => {
  emit("message-sent", message.value);
};
</script>

<style></style>
