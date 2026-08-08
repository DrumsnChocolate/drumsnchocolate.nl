<script setup lang="ts">
import { experiences } from '@/assets/experiences'
import Experience from '@/components/Experience.vue'
</script>
<template>
    <div class="section">
        <h3>EXPERIENCE</h3>
        <div class="experiences-container">
            <div class="timeline">
                <h4 class="timeline-label">TIME</h4>
                <div class="timeline-arrow">
                    <div class="arrow-line"></div>
                    <div class="arrow-head"></div>
                </div>
            </div>
            <div class="experiences-list">
                <template v-for="experience in experiences">
                    <Experience v-bind="experience" />
                </template>
            </div>
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

.experiences-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin: 0;
    gap: 2vw;
}

.timeline {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6vw;
}

.timeline-label {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    letter-spacing: 0.3em;
    color: var(--drums-regular);
}

.timeline-arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

.arrow-line {
    flex: 1;
    width: 2px;
    background-color: var(--drums-regular);
}

.arrow-head {
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 10px solid var(--drums-regular);
}

.experiences-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10vh;
}
</style>
