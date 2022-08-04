<template>
  <div id="app" class="app">
    <ul>
      <li>
        <router-link class="router-link" to="/"
          >Liste des utilisateurs</router-link
        >
      </li>
      <li><router-link class="router-link" to="/about">About</router-link></li>
      <li>
        <router-link class="router-link" to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link class="router-link" to="/test">Test</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style scoped>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 50%;
}

.router-link {
  text-decoration: none;
}
</style>
