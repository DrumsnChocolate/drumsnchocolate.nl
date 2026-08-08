<script setup lang="ts">
import { computed } from 'vue'
import type { Experience } from './experience'

const props = defineProps<Experience>()

const logoDynamicStyle = computed(() => {
    return `background-color: ${props.backgroundColor}`
})

const logoAlt = computed(() => {
    return `${props.companyTitle} logo`
})
</script>

<template>
    <div class="experience-container">
        <div class="experience">
            <div class="header">
                <a :href="url" class="logo" :style="logoDynamicStyle">
                    <div class="image-container">
                        <img class="image" :src="logoSrc" :alt="logoAlt" />
                    </div>
                </a>
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
    </div>
</template>

<style scoped>
.experience-container {
    container-type: inline-size;
    flex-grow: 1;
    display: flex;
    flex-direction: row;

    .experience {
        display: flex;
        flex-direction: row;
        width: 100%;
        flex-grow: 1;
        gap: 4vw;

        @container (max-width: 520px) {
            flex-direction: column;
        }

        .header {
            display: flex;
            justify-content: center;
            align-items: flex-start;

            @container (max-width: 520px) {
                align-items: center;
            }

            .logo {
                height: 20vh;
                display: flex;
                justify-content: center;
                align-items: center;
                aspect-ratio: 1;
                border-radius: 10px;
                .image-container {
                    display: flex;
                    height: 75%;
                    width: 75%;
                    justify-content: center;
                    align-items: center;

                    .image {
                        max-height: 100%;
                        max-width: 100%;
                    }
                }
            }
        }

        .body {
            display: flex;
            flex-direction: column;

            .title {
                display: inline;
                letter-spacing: 0;
            }

            .description {
                display: inline;
            }
        }
    }
}
</style>
