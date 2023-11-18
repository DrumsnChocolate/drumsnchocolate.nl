<template>
  <div
    class="bg-drums"
    style="
      min-height: 218px;
      height: 50vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
    "
  >
    <div class="rectangle-mid">
      <div class="diagonal-split" style="position: relative">
        <div
          class="header-position"
          style="display: flex; justify-content: center; align-items: center"
        >
          <h1 class="platinum" style="white-space: nowrap">CONTACT</h1>
        </div>
      </div>
    </div>
    <div class="rectangle-bottom">
      <div style="position: relative; height: 0; width: 0">
        <div
          style="
            position: absolute;
            right: 25vw;
            height: 0;
            width: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <div style="display: flex; column-gap: 10px">
            <a href="mailto:matbronk@gmail.com">EMAIL</a>
            <a href="https://github.com/DrumsnChocolate">GITHUB</a>
            <a href="public/Curriculum_Vitae.pdf">CV</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  top: 10vh;
  right: 25vw;
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
