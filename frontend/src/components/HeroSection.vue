<template>
  <div
    style="
      height: 50vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
    "
  >
    <div class="rectangle-top"></div>
    <div class="rectangle-mid">
      <div class="diagonal-split" style="position: relative">
        <div class="header-position">
          <div
            style="display: flex; justify-content: center; align-items: center; width: 0; height: 0"
          >
            <h1 class="sunglow" style="white-space: nowrap">DRUMS n CHOCOLATE</h1>
          </div>
        </div>
        <div class="subheader-position">
          <div
            style="display: flex; justify-content: center; align-items: center; width: 0; height: 0"
          >
            <!--            <h3 class="chocolate" style="white-space: nowrap">-->
            <!--              Software Engineering with a pinch of Math-->
            <!--            </h3>-->
          </div>
        </div>
      </div>
    </div>
    <!--    <div class="rectangle-bottom bg-platinum"></div>-->
  </div>
</template>

<script setup lang="ts"></script>

<style>
.rectangle-top {
  flex-grow: 1;
  width: 100vw;
  background-color: var(--chocolate-cosmos);
}
.rectangle-mid {
  width: 100vw;
}
.rectangle-bottom {
  flex-grow: 1;
  width: 100vw;
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
  top: calc(-10vh);
  right: calc(100vw / 4);
  width: 0;
  height: 0;
}

.subheader-position {
  position: absolute;
  top: calc(10vh);
  right: calc(-100vw / 4);
  width: 0;
  height: 0;
}
</style>
