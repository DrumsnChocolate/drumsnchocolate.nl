<script setup lang="ts">
import innicoLogo from '@/assets/Innico logo.svg'
import { computed } from 'vue'
type Props = {
    companyTitle: string
    role: string
    url: string
    description: string[]
    logoSrc: string
    backgroundColor: string
}
const props = withDefaults(defineProps<Props>(), {
    companyTitle: 'Innico',
    role: 'Full Stack Engineer / Data Scientist',
    url: 'https://innico.nl',
    description: () => [
        'Innico is a software company in Enschede building a sales-first S&OP platform – helping wholesale and production SMEs replace spreadsheets with data-driven forecasting, inventory management, and pricing.',
        "I joined early as a Full Stack Engineer and in-house Data Scientist, designing and building the core backend: automated order entry, customer-level pricing with approval workflows, and AI-driven demand forecasting. As the product matured, I was involved in the migration to a multi-tenant PostgreSQL architecture and led the modernization of the API layer for type-safety and long-term maintainability – enabling Innico to scale from one client to a true SaaS product. The platform became the client's single source of truth, cutting manual work, improving forecast accuracy, and reducing new-client onboarding from months to days.",
    ],
    logoSrc: innicoLogo,
    backgroundColor: '#121c32',
})

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
