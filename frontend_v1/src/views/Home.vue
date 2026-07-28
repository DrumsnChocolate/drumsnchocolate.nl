<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Hero from '@/sections/Hero.vue'
import Experiences from '@/sections/Experiences.vue'
import { useTemplateRef, onMounted, onUnmounted } from 'vue'

const navbar = useTemplateRef('navbar')
let observer: ResizeObserver | null = null

onMounted(() => {
    observer = new ResizeObserver(([entry]) => {
        if (!entry) return
        document.documentElement.style.setProperty(
            '--navbar-height',
            `${(entry.target as HTMLDivElement).offsetHeight}px`,
        )
    })
    observer.observe(navbar.value!)
})

onUnmounted(() => {
    observer?.disconnect()
})
</script>

<template>
    <div class="home">
        <div ref="navbar" class="navbar-fixed">
            <Navbar />
        </div>
        <Hero id="hero" />
        <div class="sections-container">
            <Experiences id="experience" />
            <Projects id="projects" />
            <Contact id="contact" />
        </div>
        <Footer id="footer" />
    </div>
</template>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.navbar-fixed {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 1000;
}

.navbar-fixed::before {
    content: '';
    position: absolute;
    inset: 0;
    bottom: -30px;
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

.sections-container {
    display: flex;
    flex-direction: column;
    margin-left: 10vw;
    margin-right: 10vw;
    gap: 20vh;
}
</style>
