<script setup lang="ts"></script>

<template>
    <div class="hero-container">
        <img class="hero-image" src="../assets/logo-wide.svg" alt="<drums/chocolate>" />
    </div>
</template>

<style scoped>
.hero-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 15vw;
    margin-right: 15vw;
}

.hero-image {
    width: 100%;
    object-fit: contain;
}
</style>
