<script setup lang="ts"></script>

<template>
    <div class="navbar-container">
        <div class="navbar-half-left">
            <img class="navbar-logo" src="../assets/logo nav.svg" alt="<d/c>" />
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
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 50px;
    display: flex;
    align-items: flex-end;
}

.navbar-half-left {
    flex-grow: 1;
    display: flex;
}

.navbar-half-right {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    gap: 10%;
}

.navbar-logo {
    width: 20%;
    object-fit: contain;
}
</style>
