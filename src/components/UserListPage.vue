<template>
  <div>
    <h1>Liste des utilisateurs</h1>
    <ul v-if="userList?.length">
      <UserItem v-for="user in userList" :key="user.id" :user="user" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";

import type { Ref } from "vue";
import type User from "../types/user.interface";

import getAllUsers from "../API/getAllUsers";
import UserItem from "./UserItem.vue";

const userList: Ref<User[] | null> = ref(null);

onBeforeMount(async () => {
  userList.value = await getAllUsers();
});
</script>

<style>
h1 {
  color: blue;
}

ul {
  list-style: none;
}
</style>
