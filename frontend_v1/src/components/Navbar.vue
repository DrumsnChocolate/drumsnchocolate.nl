<script setup lang="ts">
import { ref } from 'vue'

const collapsed = ref(true)
</script>

<template>
    <div class="fixed blurred">
        <div class="container">
            <div class="left">
                <a class="logo" href="/">
                    <img class="image" src="../assets/logo nav.svg" alt="<d/c>" />
                </a>
            </div>
            <div class="right">
                <div class="horizontal">
                    <a href="#experience">
                        <h3 style="display: inline">EXPERIENCE</h3>
                    </a>
                    <a href="#projects">
                        <h3 style="display: inline">PROJECTS</h3>
                    </a>
                    <a href="#contact">
                        <h3 style="display: inline">CONTACT</h3>
                    </a>
                </div>

                <div class="vertical">
                    <div class="row-end">
                        <div class="hamburger" @click="() => (collapsed = !collapsed)">
                            <div class="line" />
                            <div class="line" />
                            <div class="line" />
                        </div>
                    </div>
                    <div class="items blurred-left">
                        <div class="list">
                            <template v-if="!collapsed">
                                <a href="#experience">
                                    <h3 style="display: inline">EXPERIENCE</h3>
                                </a>
                                <a href="#projects">
                                    <h3 style="display: inline">PROJECTS</h3>
                                </a>
                                <a href="#contact">
                                    <h3 style="display: inline">CONTACT</h3>
                                </a></template
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fixed {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 1000;

    .container {
        max-height: min(5vh, 40px);
        margin-left: min(5vw, 40px);
        margin-right: min(5vw, 40px);
        margin-top: min(5vh, 40px);
        margin-bottom: 20px;
        display: flex;

        .left {
            width: 50%;
            display: flex;

            .logo {
                flex-grow: 1;
                max-width: 30vw;
                display: flex;

                .image {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
            }
        }

        .right {
            container-type: inline-size;
            width: 50%;
            display: flex;
            justify-content: flex-end;

            .horizontal {
                display: flex;
                width: 100%;
                gap: 10%;
                justify-content: flex-end;
                @container (max-width: 500px) {
                    display: none;
                }
            }
            @container (max-width: 500px) {
                .vertical {
                    display: flex;
                    width: 100%;
                    justify-content: flex-end;
                    .row-end {
                        display: flex;
                        width: 100%;
                        height: 100%;
                        justify-content: flex-end;
                        .hamburger {
                            z-index: 1;
                            aspect-ratio: 1;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            cursor: pointer;

                            .line {
                                height: 4px;
                                width: 100%;
                                border-radius: 2px;
                                background-color: var(--drums-regular);
                            }
                        }
                    }

                    .items {
                        position: absolute;
                        top: 0;
                        height: 100vh;
                        right: 0;
                        display: flex;
                        flex-direction: column;
                        overflow: visible;
                        .list {
                            position: relative;
                            top: var(--navbar-height);
                            margin-left: 40px;
                            display: flex;
                            flex-direction: column;
                            overflow: visible;
                        }
                    }
                }
            }
        }
    }
}

.blurred::before {
    content: '';
    position: absolute;
    inset: 0;
    bottom: -10px;
    backdrop-filter: blur(5px);
    mask-image: linear-gradient(
        180deg,
        rgb(0% 0% 0%) 0%,
        rgb(0% 0% 0%) 70%,
        rgb(0% 0% 0% / 0.87890625) calc(70% + 30% * 0.0625),
        rgb(0% 0% 0% / 0.765625) calc(70% + 30% * 0.125),
        rgb(0% 0% 0% / 0.66015625) calc(70% + 30% * 0.1875),
        rgb(0% 0% 0% / 0.5625) calc(70% + 30% * 0.25),
        rgb(0% 0% 0% / 0.47265625) calc(70% + 30% * 0.3125),
        rgb(0% 0% 0% / 0.390625) calc(70% + 30% * 0.375),
        rgb(0% 0% 0% / 0.31640625) calc(70% + 30% * 0.4375),
        rgb(0% 0% 0% / 0.25) calc(70% + 30% * 0.5),
        rgb(0% 0% 0% / 0.19140625) calc(70% + 30% * 0.5625),
        rgb(0% 0% 0% / 0.140625) calc(70% + 30% * 0.625),
        rgb(0% 0% 0% / 0.09765625) calc(70% + 30% * 0.6875),
        rgb(0% 0% 0% / 0.0625) calc(70% + 30% * 0.75),
        rgb(0% 0% 0% / 0.03515625) calc(70% + 30% * 0.8125),
        rgb(0% 0% 0% / 0.015625) calc(70% + 30% * 0.875),
        rgb(0% 0% 0% / 0.00390625) calc(70% + 30% * 0.9375),
        rgb(0% 0% 0% / 0) 100%
    );
    -webkit-mask-image: linear-gradient(
        180deg,
        rgb(0% 0% 0%) 0%,
        rgb(0% 0% 0%) 70%,
        rgb(0% 0% 0% / 0.9990234375) calc(70% + 30% * 0.0625),
        rgb(0% 0% 0% / 0.9921875) calc(70% + 30% * 0.125),
        rgb(0% 0% 0% / 0.9736328125) calc(70% + 30% * 0.1875),
        rgb(0% 0% 0% / 0.9375) calc(70% + 30% * 0.25),
        rgb(0% 0% 0% / 0.8779296875) calc(70% + 30% * 0.3125),
        rgb(0% 0% 0% / 0.7890625) calc(70% + 30% * 0.375),
        rgb(0% 0% 0% / 0.6650390625) calc(70% + 30% * 0.4375),
        rgb(0% 0% 0% / 0.5) calc(70% + 30% * 0.5),
        rgb(0% 0% 0% / 0.3349609375) calc(70% + 30% * 0.5625),
        rgb(0% 0% 0% / 0.2109375) calc(70% + 30% * 0.625),
        rgb(0% 0% 0% / 0.1220703125) calc(70% + 30% * 0.6875),
        rgb(0% 0% 0% / 0.0625) calc(70% + 30% * 0.75),
        rgb(0% 0% 0% / 0.0263671875) calc(70% + 30% * 0.8125),
        rgb(0% 0% 0% / 0.0078125) calc(70% + 30% * 0.875),
        rgb(0% 0% 0% / 0.0009765625) calc(70% + 30% * 0.9375),
        rgb(0% 0% 0% / 0) 100%
    );
    pointer-events: none;
    z-index: -1;
}

.blurred-left::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -10px;
    backdrop-filter: blur(5px);
    mask-image: linear-gradient(
        270deg,
        rgb(0% 0% 0%) 0%,
        rgb(0% 0% 0%) 70%,
        rgb(0% 0% 0% / 0.87890625) calc(70% + 30% * 0.0625),
        rgb(0% 0% 0% / 0.765625) calc(70% + 30% * 0.125),
        rgb(0% 0% 0% / 0.66015625) calc(70% + 30% * 0.1875),
        rgb(0% 0% 0% / 0.5625) calc(70% + 30% * 0.25),
        rgb(0% 0% 0% / 0.47265625) calc(70% + 30% * 0.3125),
        rgb(0% 0% 0% / 0.390625) calc(70% + 30% * 0.375),
        rgb(0% 0% 0% / 0.31640625) calc(70% + 30% * 0.4375),
        rgb(0% 0% 0% / 0.25) calc(70% + 30% * 0.5),
        rgb(0% 0% 0% / 0.19140625) calc(70% + 30% * 0.5625),
        rgb(0% 0% 0% / 0.140625) calc(70% + 30% * 0.625),
        rgb(0% 0% 0% / 0.09765625) calc(70% + 30% * 0.6875),
        rgb(0% 0% 0% / 0.0625) calc(70% + 30% * 0.75),
        rgb(0% 0% 0% / 0.03515625) calc(70% + 30% * 0.8125),
        rgb(0% 0% 0% / 0.015625) calc(70% + 30% * 0.875),
        rgb(0% 0% 0% / 0.00390625) calc(70% + 30% * 0.9375),
        rgb(0% 0% 0% / 0) 100%
    );
    -webkit-mask-image: linear-gradient(
        270deg,
        rgb(0% 0% 0%) 0%,
        rgb(0% 0% 0%) 70%,
        rgb(0% 0% 0% / 0.9990234375) calc(70% + 30% * 0.0625),
        rgb(0% 0% 0% / 0.9921875) calc(70% + 30% * 0.125),
        rgb(0% 0% 0% / 0.9736328125) calc(70% + 30% * 0.1875),
        rgb(0% 0% 0% / 0.9375) calc(70% + 30% * 0.25),
        rgb(0% 0% 0% / 0.8779296875) calc(70% + 30% * 0.3125),
        rgb(0% 0% 0% / 0.7890625) calc(70% + 30% * 0.375),
        rgb(0% 0% 0% / 0.6650390625) calc(70% + 30% * 0.4375),
        rgb(0% 0% 0% / 0.5) calc(70% + 30% * 0.5),
        rgb(0% 0% 0% / 0.3349609375) calc(70% + 30% * 0.5625),
        rgb(0% 0% 0% / 0.2109375) calc(70% + 30% * 0.625),
        rgb(0% 0% 0% / 0.1220703125) calc(70% + 30% * 0.6875),
        rgb(0% 0% 0% / 0.0625) calc(70% + 30% * 0.75),
        rgb(0% 0% 0% / 0.0263671875) calc(70% + 30% * 0.8125),
        rgb(0% 0% 0% / 0.0078125) calc(70% + 30% * 0.875),
        rgb(0% 0% 0% / 0.0009765625) calc(70% + 30% * 0.9375),
        rgb(0% 0% 0% / 0) 100%
    );
    pointer-events: none;
    z-index: -1;
}
</style>
