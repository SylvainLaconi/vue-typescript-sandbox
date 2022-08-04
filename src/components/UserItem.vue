<template>
  <li @click="handleClick">
    <img :alt="user.firstName" :src="user.picture" />
    <p>{{ user.title }} {{ user.firstName }} {{ user.lastName }}</p>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type User from "../types/user.interface";

export default defineComponent({
  name: "UserItem",
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  methods: {
    handleClick(): void {
      this.$router.push(`/user/${this.$props.user.id}`);
    },
  },
});
</script>

<style>
li {
  display: flex;
}
</style>
