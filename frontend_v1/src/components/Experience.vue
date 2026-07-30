<script setup lang="ts">
import { computed } from 'vue'
import type { Experience } from './experience'

const props = defineProps<Experience>()

const logoContainerDynamicStyle = computed(() => {
    return `background-color: ${props.backgroundColor}`
})

const logoAlt = computed(() => {
    return `${props.companyTitle} logo`
})
</script>

<template>
    <div class="experience">
        <div class="logo-container" :style="logoContainerDynamicStyle">
            <div class="logo-padding">
                <img class="logo" :src="logoSrc" :alt="logoAlt" />
            </div>
        </div>
        <div class="body">
            <a :href="url">
                <h2 class="title">{{ companyTitle }} | {{ role }}</h2>
            </a>

            <p class="description">
                <template class="line" v-for="line in description">
                    {{ line }}<br /><br />
                </template>
            </p>
        </div>
    </div>
</template>

<style scoped>
.experience {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    gap: 4vw;
}

.logo-container {
    height: 20vh;
    aspect-ratio: 1;
    border-radius: 10px;
}

.logo-padding {
    height: 75%;
    width: 75%;
    padding: 12.5%;
}

.logo {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.body {
    display: flex;
    flex-direction: column;
}

.title {
    display: inline;
    letter-spacing: 0;
}

.description {
    display: inline;
}
</style>
