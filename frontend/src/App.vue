<template>
  <!-- <div>
    <RouterLink to="/">Home</RouterLink>
  </div>
  
  <div>
    <RouterLink to="/about">About</RouterLink>
  </div> -->
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>

:root {
  /* https://colorpalettes.net/color-palette-3737/ */
    --drums-blue: #355a85;
    --chocolate-brown: #764234;
    --drumsnchocolate-grey: #d3d8d7;
    --drumsnchocolate-black: #192532;
}

</style>