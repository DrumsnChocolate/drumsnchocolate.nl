<template>
  <div
    class="bg-drums"
    style="
      height: 50vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
    "
  >
    <div class="rectangle-mid">
      <div class="diagonal-split" style="position: relative">
        <div class="header-position">
          <div
            style="display: flex; justify-content: center; align-items: center; width: 0; height: 0"
          >
            <h1 class="platinum" style="white-space: nowrap">CONTACT</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="rectangle-bottom">
      <a href="mailto:matbronk@gmail.com">EMAIL</a>
      <a href="https://github.com/DrumsnChocolate">GITHUB</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gradient {
  height: 10vh;
  width: 100%;
  background-image: linear-gradient(var(--platinum), var(--drums-blue));
}

.diagonal-split {
  border-top: 20vh solid var(--platinum);
  border-right: 50vw solid var(--platinum);
  border-bottom: 20vh solid var(--drums-blue);
  border-left: 50vw solid var(--drums-blue);
  height: 0;
  width: 0;
}

.header-position {
  position: absolute;
  top: calc(10vh);
  right: calc(100vw / 4);
  width: 0;
  height: 0;
}

.rectangle-bottom {
  flex-grow: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<script setup lang="ts"></script>
