<template>
  <div
    style="
      min-height: 218px;
      height: 50vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
    "
  >
    <div class="rectangle-top"></div>
    <div>
      <div class="diagonal-split" style="position: relative">
        <div class="header-position">
          <div
            style="display: flex; justify-content: center; align-items: center; width: 0; height: 0"
          >
            <h1 v-if="grid.sm" class="sunglow" style="white-space: nowrap">DRUMS n CHOCOLATE</h1>
            <h1 v-else class="sunglow">DRUMS n CHOCOLATE</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGrid } from 'vue-screen'
const grid = useGrid('bootstrap')
</script>

<style lang="scss" scoped>
.rectangle-top {
  flex-grow: 1;
  width: 100vw;
  background-color: var(--chocolate-cosmos);
}
.diagonal-split {
  border-top: 20vh solid var(--chocolate-cosmos);
  border-right: 50vw solid var(--platinum);
  border-bottom: 20vh solid var(--platinum);
  border-left: 50vw solid var(--chocolate-cosmos);
  height: 0;
  width: 0;
}

.header-position {
  position: absolute;
  top: -10vh;
  right: 25vw;
  width: 0;
  height: 0;
}
</style>
