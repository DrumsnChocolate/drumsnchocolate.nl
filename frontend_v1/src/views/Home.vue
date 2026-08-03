<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Hero from '@/sections/Hero.vue'
import Experiences from '@/sections/Experiences.vue'
import Projects from '@/sections/Projects.vue'
import Contact from '@/sections/Contact.vue'
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
    observer.observe(navbar.value!.$el)
})

onUnmounted(() => {
    observer?.disconnect()
})
</script>

<template>
    <div class="home">
        <Navbar ref="navbar" />
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

.sections-container {
    display: flex;
    flex-direction: column;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-bottom: 10vh;
    gap: 20vh;
}
</style>
