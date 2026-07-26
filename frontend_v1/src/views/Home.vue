<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Hero from '@/sections/Hero.vue'
</script>

<template>
    <div class="home">
        <div class="navbar-fixed">
            <Navbar />
        </div>
        <Hero id="hero" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Contact id="contact" />
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
}
</style>
