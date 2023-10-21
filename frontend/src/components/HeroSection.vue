<template>
  <div
    style="
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
    "
  >
    <div class="rectangle-top"></div>
    <div class="rectangle-mid">
      <div class="diagonal-split" style="position: relative">
        <div class="drums-position">
          <div
            style="display: flex; justify-content: center; align-items: center; width: 0; height: 0"
          >
            <h1 class="drums">DRUMS</h1>
          </div>
        </div>
        <div class="chocolate-position">
          <div
            style="display: flex; justify-content: center; align-items: center; width: 0; height: 0"
          >
            <h1 class="chocolate">CHOCOLATE</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="rectangle-bottom"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.rectangle-top {
  flex-grow: 1;
  width: 100vw;
  background-color: var(--chocolate-brown);
}
.rectangle-mid {
  width: 100vw;
}
.rectangle-bottom {
  flex-grow: 1;
  width: 100vw;
  background-color: var(--drums-blue);
}

.diagonal-split {
  border-top: 30vh solid var(--chocolate-brown);
  border-right: 50vw solid var(--chocolate-brown);
  border-bottom: 30vh solid var(--drums-blue);
  border-left: 50vw solid var(--drums-blue);
  height: 0;
  width: 0;
}

.logo-box {
  background-color: var(--drumsnchocolate-grey-transparent);
  color: var(--drumsnchocolate-black-transparent);
  height: 15vh;
  width: 25vw;
}

.drums-position {
  position: absolute;
  top: calc(-60vh / 6);
  right: calc(-100vw / 6);
  width: 0;
  height: 0;
}

.chocolate-position {
  position: absolute;
  top: calc(60vh / 6);
  right: calc(100vw / 6);
  width: 0;
  height: 0;
}
</style>
