<template>
  <div>
    <h1>A propos</h1>
    <p>{{ myAdress.number }}, {{ myAdress.street }}</p>
    <p>{{ myAdress.postalCode }} {{ myAdress.city }}, {{ myAdress.country }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type Adress from "../types/adress.interface";

export default defineComponent({
  data() {
    return {
      myAdress: {
        number: 101,
        street: "Main Street",
        postalCode: "98889",
        city: "Los Angeles",
        country: "United-States",
      } as Adress,
    };
  },
});
</script>

<style></style>
