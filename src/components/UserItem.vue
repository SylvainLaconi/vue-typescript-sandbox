<template>
  <li @click="handleClick">
    <img :alt="user.firstName" :src="user.picture" />
    <p>{{ user.title }} {{ user.firstName }} {{ user.lastName }}</p>
  </li>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type User from "../types/user.interface";

import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    required: true,
  },
});

const handleClick = (): void => {
  router.push(`/user/${props.user.id}`);
};
</script>

<style>
li {
  display: flex;
}
</style>
