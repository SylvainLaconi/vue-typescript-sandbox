<template>
  <div>
    <h1>Contact</h1>

    <p>{{ myContact.email }}</p>

    <p>{{ myContact.phone }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type Contact from "../types/contact.interface";

export default defineComponent({
  data() {
    return {
      myContact: {
        email: "john.doe@email.com",
        phone: "+650 555 1234",
      } as Contact,
    };
  },
});
</script>

<style></style>
