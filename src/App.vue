<script setup lang="ts">
import HomeView from './views/HomeView.vue';
</script>

<template>
  <nav>
    <router-link to="/">
      Página Principal
    </router-link>
    <router-link to="/videos">
      Videos
    </router-link>
    <router-link to="/tabela">
      Tabela
    </router-link>
    <router-link to="/imagens">
      Imagens
    </router-link>
  </nav>
  <router-view />

</template>

<style scoped>
  nav {
    display: flex;
    gap: 10px;
    padding: 12px;
    align-items: center;
    justify-content: center;
  }
  nav > a {
    color: black;
    text-decoration: none;
  }
</style>