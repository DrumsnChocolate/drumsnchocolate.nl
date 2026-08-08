<script setup lang="ts"></script>
<template>
    <div class="section">
        <a href="#projects"><h3>PROJECTS</h3></a>
        <div class="projects-container">
            <h3 style="display: inline; color: black"><</h3>
            <h3 style="display: inline; color: var(--drums-regular)">coming</h3>
            <h3 style="display: inline; color: black">/</h3>
            <h3 style="display: inline; color: var(--chocolate-regular)">soon</h3>
            <h3 style="display: inline; color: black">></h3>
        </div>
    </div>
</template>

<style scoped>
.section {
    padding-top: var(--navbar-v-fade-end);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10vh;
}
.projects-container {
    display: flex;
}
</style>
