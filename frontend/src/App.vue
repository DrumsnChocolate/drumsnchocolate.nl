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
  /* https://colorpalettes.net/color-palette-4342/ */
    --drums-blue: #53627A;
    --chocolate-brown: #5F3E3A;
    --drumsnchocolate-creme: #DCD9D3;
    --drumsnchocolate-grey-blue: #8C9DA7;
    --drumsnchocolate-dark-purple: #4D4049;
}

a {
  text-decoration: none;
  color: var(--drums-blue);
}

a:hover {
  text-decoration: underline;
}

a:visited {
  text-decoration: none;
  color: var(--drumsnchocolate-dark-purple) !important;
}



.drums {
    color: var(--drums-blue);
}

.chocolate {
    color: var(--chocolate-brown);
}

.creme {
  color: var(--drumsnchocolate-creme);
}

.bg-drums {
  background-color: var(--drums-blue);
}

.bg-drums a {
  color: var(--drumsnchocolate-grey-blue);
}


.bg-creme {
  background-color: var(--drumsnchocolate-creme);
}
.bg-grey-blue {
  background-color: var(--drumsnchocolate-grey-blue);
}
.bg-dark-purple {
  background-color: var(--drumsnchocolate-dark-purple);
}
</style>