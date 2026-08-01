<script setup lang="ts"></script>

<template>
    <div class="navbar-container">
        <div class="navbar-half-left">
            <a class="navbar-link" href="/">
                <img class="navbar-logo" src="../assets/logo nav.svg" alt="<d/c>" />
            </a>
        </div>
        <div class="navbar-half-right">
            <div>
                <a href="#experience">
                    <h3 style="display: inline">EXPERIENCE</h3>
                </a>
            </div>
            <div>
                <a href="#projects">
                    <h3 style="display: inline">PROJECTS</h3>
                </a>
            </div>
            <div>
                <a href="#contact">
                    <h3 style="display: inline">CONTACT</h3>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navbar-container {
    max-height: min(5vh, 40px);
    margin-left: min(5vw, 40px);
    margin-right: min(5vw, 40px);
    margin-top: min(5vh, 40px);
    margin-bottom: 20px;
    display: flex;
}

.navbar-half-left {
    width: 50%;
    max-width: 50%;
    display: flex;
}

.navbar-half-right {
    width: 50%;
    max-width: 50%;
    display: flex;
    justify-content: flex-end;
    gap: 10%;
}

.navbar-link {
    width: 100%;
    display: flex;
}

.navbar-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}
</style>
