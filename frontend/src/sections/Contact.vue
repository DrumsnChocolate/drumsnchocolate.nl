<script setup lang="ts">
import portrait from '@/assets/Portrait.jpeg'

type ContactOption = {
    title: string
    url: string
}

const contactOptions: ContactOption[] = [
    {
        title: 'email',
        url: 'mailto:matbronk@proton.me',
    },
    {
        title: 'github',
        url: 'https://github.com/DrumsnChocolate',
    },
    {
        title: 'linkedin',
        url: 'https://linkedin.com/in/matteo-bronkhorst/',
    },
]
</script>
<template>
    <div class="section">
        <a href="#contact"><h3>CONTACT ME</h3></a>
        <div class="contact-container">
            <div class="contact">
                <div class="portrait-container">
                    <img class="portrait" :src="portrait" alt="Portrait picture of Matteo" />
                </div>
                <div class="contact-options">
                    <template v-for="{ title, url } in contactOptions">
                        <a :href="url">
                            <h2 class="contact-option-text">{{ title }}</h2>
                        </a>
                    </template>
                </div>
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
.contact-container {
    display: flex;
}

.contact {
    display: flex;
    flex-direction: column;
    gap: 10vh;
}

.contact-options {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
}

.contact-option-text {
    text-transform: uppercase;
}

.portrait-container {
    height: 20vh;
    display: flex;
    justify-content: center;
}

.portrait {
    object-fit: contain;
    border-radius: 10px;
}
</style>
