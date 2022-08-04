<template>
  <div>
    <h1>{{ user?.firstName }} {{ user?.lastName }}</h1>
    <img :alt="user?.id" :src="user?.picture" />
    <p>{{ user?.dateOfBirth }}</p>
    <p>{{ user?.gender }}</p>
    <p>{{ user?.email }}</p>
    <p>{{ user?.phone }}</p>
    <p>
      {{ user?.location?.street }}, {{ user?.location?.city }},
      {{ user?.location?.country }}
    </p>
    <p>{{ user?.registerDate }}</p>
    <p>{{ user?.updatedDate }}</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onUnmounted,
  onBeforeMount,
  onBeforeUnmount,
} from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";
import type { RouteLocationNormalizedLoaded } from "vue-router";

import type User from "../types/user.interface";
import getUserById from "../API/getUserById";

export default defineComponent({
  name: "UserPage",
  data() {
    return {};
  },
  setup() {
    const route: RouteLocationNormalizedLoaded = useRoute();
    const userId: string = route.params.id;

    const user: Ref<User | null> = ref(null);

    onBeforeMount(async () => {
      if (userId) {
        user.value = await getUserById(userId);
      } else {
        console.log("error");
      }

      console.log("onBeforeMount");
    });

    onMounted((): void => console.log("onMounted"));

    onBeforeUnmount((): void => console.log("onBeforeUnmount"));

    onUnmounted((): void => console.log("onUnmoutend"));

    return {
      user,
    };
  },
});
</script>

<style></style>
