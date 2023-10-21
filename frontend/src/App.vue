<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss">
:root {
  /* https://colorpalettes.net/color-palette-4342/ */
  --drums-blue: #53627a;
  --chocolate-cosmos: #5f021f;
  --platinum: #d8dce4;
  --sunglow: #fdca40;
}

a {
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
}

.drums {
  color: var(--drums-blue) !important;
}

.chocolate {
  color: var(--chocolate-cosmos) !important;
}

.platinum {
  color: var(--platinum) !important;
}

.sunglow {
  color: var(--sunglow) !important;
}

.bg-platinum {
  background-color: var(--platinum);
  color: black;
  a {
    color: var(--chocolate-cosmos);
    &:visited {
      color: var(--drums-blue);
    }
  }
  h1,
  h2,
  h3 {
    color: var(--chocolate-cosmos);
  }
}

.bg-drums {
  background-color: var(--drums-blue);
  color: white;
  a {
    color: var(--sunglow);
    &:visited {
      color: white;
    }
  }
}

.bg-chocolate {
  background-color: var(--chocolate-cosmos);
  color: var(--platinum);
  a {
    color: var(--sunglow);
    &:visited {
      color: var(--platinum);
    }
  }
  h1,
  h2,
  h3 {
    color: var(--sunglow);
  }
}
</style>
