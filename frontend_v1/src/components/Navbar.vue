<script setup lang="ts">
import { ref, useTemplateRef, onMounted, onUnmounted } from 'vue'

const collapsed = ref(true)
const navbar = useTemplateRef('navbar')
const sidebar = useTemplateRef('sidebar')
let navbarObserver: ResizeObserver | null = null
let sidebarObserver: ResizeObserver | null = null

onMounted(() => {
    navbarObserver = new ResizeObserver(([entry]) => {
        if (!entry) return
        const el = entry.target as HTMLDivElement
        document.documentElement.style.setProperty('--navbar-height', `${el.offsetHeight}px`)
    })
    navbarObserver.observe(navbar.value!)

    sidebarObserver = new ResizeObserver(([entry]) => {
        if (!entry) return
        const el = entry.target as HTMLDivElement
        document.documentElement.style.setProperty('--sidebar-width', `${el.offsetWidth}px`)
    })
    sidebarObserver.observe(sidebar.value!)
})

onUnmounted(() => {
    navbarObserver?.disconnect()
    sidebarObserver?.disconnect()
})
</script>

<template>
    <div ref="root" class="navbar">
        <div class="page-blur" :class="{ 'l-shape': !collapsed }"></div>
        <div ref="navbar" class="fixed">
            <div class="container">
                <div class="left">
                    <a class="logo" href="/">
                        <img class="image" src="../assets/logo nav.svg" alt="<d/c>" />
                    </a>
                </div>
                <div class="right">
                    <div class="horizontal">
                        <a href="#experience"><h3 style="display: inline">EXPERIENCE</h3></a>
                        <a href="#projects"><h3 style="display: inline">PROJECTS</h3></a>
                        <a href="#contact"><h3 style="display: inline">CONTACT</h3></a>
                    </div>

                    <div class="vertical">
                        <div class="row-end">
                            <div class="hamburger" @click="() => (collapsed = !collapsed)">
                                <div class="line" />
                                <div class="line" />
                                <div class="line" />
                            </div>
                        </div>
                        <div ref="sidebar" class="items">
                            <div class="list">
                                <template v-if="!collapsed">
                                    <a href="#experience"
                                        ><h3 style="display: inline">EXPERIENCE</h3></a
                                    >
                                    <a href="#projects"
                                        ><h3 style="display: inline">PROJECTS</h3></a
                                    >
                                    <a href="#contact"><h3 style="display: inline">CONTACT</h3></a>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    /* Single source of truth for nav content height. Everything else
       (container height, the pre-mount --navbar-h fallback) derives
       from this instead of duplicating the value. */
    --navbar-content-h: min(5vh, 40px);
    --navbar-margin-top: min(5vh, 40px);
    --navbar-margin-bottom: 20px;
    --sidebar-w: 200px;

    /* Real measured height once JS mounts; calc'd fallback until then. */
}

.fixed {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 1000;

    .container {
        height: var(--navbar-content-h);
        margin-left: min(5vw, 40px);
        margin-right: min(5vw, 40px);
        margin-top: var(--navbar-margin-top);
        margin-bottom: var(--navbar-margin-bottom);
        display: flex;

        .left {
            width: 50%;
            height: 100%;
            display: flex;

            .logo {
                flex-grow: 1;
                max-width: 30vw;
                height: 100%;
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
                        position: fixed;
                        top: var(--navbar-height);
                        right: 0;
                        display: flex;
                        flex-direction: column;
                        overflow: visible;

                        .list {
                            margin-left: 10%;
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

.page-blur {
    --v-fade-end: calc(var(--navbar-height) * 1.3);
    --h-fade-end: calc(var(--sidebar-width) * 1.3);

    --v-mask: linear-gradient(
        180deg,
        black 0,
        black var(--navbar-height),
        rgb(0 0 0 / 0.999)
            calc(var(--navbar-height) + (var(--v-fade-end) - var(--navbar-height)) * 0.0625),
        rgb(0 0 0 / 0.992)
            calc(var(--navbar-height) + (var(--v-fade-end) - var(--navbar-height)) * 0.125),
        rgb(0 0 0 / 0.974)
            calc(var(--navbar-height) + (var(--v-fade-end) - var(--navbar-height)) * 0.1875),
        rgb(0 0 0 / 0.938)
            calc(var(--navbar-height) + (var(--v-fade-end) - var(--navbar-height)) * 0.25),
        rgb(0 0 0 / 0.878)
            calc(var(--navbar-height) + (var(--v-fade-end) - var(--navbar-height)) * 0.3125),
        rgb(0 0 0 / 0.789)
            calc(var(--navbar-height) + (var(--v-fade-end) - var(--navbar-height)) * 0.375),
        rgb(0 0 0 / 0.665)
            calc(var(--navbar-height) + (var(--v-fade-end) - var(--navbar-height)) * 0.4375),
        rgb(0 0 0 / 0.5)
            calc(var(--navbar-height) + (var(--v-fade-end) - var(--navbar-height)) * 0.5),
        rgb(0 0 0 / 0.335)
            calc(var(--navbar-height) + (var(--v-fade-end) - var(--navbar-height)) * 0.5625),
        rgb(0 0 0 / 0.211)
            calc(var(--navbar-height) + (var(--v-fade-end) - var(--navbar-height)) * 0.625),
        rgb(0 0 0 / 0.122)
            calc(var(--navbar-height) + (var(--v-fade-end) - var(--navbar-height)) * 0.6875),
        rgb(0 0 0 / 0.063)
            calc(var(--navbar-height) + (var(--v-fade-end) - var(--navbar-height)) * 0.75),
        rgb(0 0 0 / 0.026)
            calc(var(--navbar-height) + (var(--v-fade-end) - var(--navbar-height)) * 0.8125),
        rgb(0 0 0 / 0.008)
            calc(var(--navbar-height) + (var(--v-fade-end) - var(--navbar-height)) * 0.875),
        rgb(0 0 0 / 0.001)
            calc(var(--navbar-height) + (var(--v-fade-end) - var(--navbar-height)) * 0.9375),
        transparent var(--v-fade-end)
    );

    --h-mask: linear-gradient(
        270deg,
        black 0,
        black var(--sidebar-width),
        rgb(0 0 0 / 0.999)
            calc(var(--sidebar-width) + (var(--h-fade-end) - var(--sidebar-width)) * 0.0625),
        rgb(0 0 0 / 0.992)
            calc(var(--sidebar-width) + (var(--h-fade-end) - var(--sidebar-width)) * 0.125),
        rgb(0 0 0 / 0.974)
            calc(var(--sidebar-width) + (var(--h-fade-end) - var(--sidebar-width)) * 0.1875),
        rgb(0 0 0 / 0.938)
            calc(var(--sidebar-width) + (var(--h-fade-end) - var(--sidebar-width)) * 0.25),
        rgb(0 0 0 / 0.878)
            calc(var(--sidebar-width) + (var(--h-fade-end) - var(--sidebar-width)) * 0.3125),
        rgb(0 0 0 / 0.789)
            calc(var(--sidebar-width) + (var(--h-fade-end) - var(--sidebar-width)) * 0.375),
        rgb(0 0 0 / 0.665)
            calc(var(--sidebar-width) + (var(--h-fade-end) - var(--sidebar-width)) * 0.4375),
        rgb(0 0 0 / 0.5)
            calc(var(--sidebar-width) + (var(--h-fade-end) - var(--sidebar-width)) * 0.5),
        rgb(0 0 0 / 0.335)
            calc(var(--sidebar-width) + (var(--h-fade-end) - var(--sidebar-width)) * 0.5625),
        rgb(0 0 0 / 0.211)
            calc(var(--sidebar-width) + (var(--h-fade-end) - var(--sidebar-width)) * 0.625),
        rgb(0 0 0 / 0.122)
            calc(var(--sidebar-width) + (var(--h-fade-end) - var(--sidebar-width)) * 0.6875),
        rgb(0 0 0 / 0.063)
            calc(var(--sidebar-width) + (var(--h-fade-end) - var(--sidebar-width)) * 0.75),
        rgb(0 0 0 / 0.026)
            calc(var(--sidebar-width) + (var(--h-fade-end) - var(--sidebar-width)) * 0.8125),
        rgb(0 0 0 / 0.008)
            calc(var(--sidebar-width) + (var(--h-fade-end) - var(--sidebar-width)) * 0.875),
        rgb(0 0 0 / 0.001)
            calc(var(--sidebar-width) + (var(--h-fade-end) - var(--sidebar-width)) * 0.9375),
        transparent var(--h-fade-end)
    );

    position: fixed;
    inset: 0;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    pointer-events: none;
    z-index: 999;

    mask-image: var(--v-mask);
    -webkit-mask-image: var(--v-mask);

    &.l-shape {
        mask-image: var(--v-mask), var(--h-mask);
        -webkit-mask-image: var(--v-mask), var(--h-mask);
        mask-composite: add;
        -webkit-mask-composite: source-over;
    }
}
</style>
