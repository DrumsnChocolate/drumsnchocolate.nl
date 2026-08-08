import type { Experience } from "@/components/experience"
import innicoLogo from '@/assets/innico-logo.svg'
import netlightLogo from '@/assets/netlight-logo.svg'

export const experiences: Experience[] = [
    {
        companyTitle: 'Innico',
        role: 'Full Stack Engineer / Data Scientist',
        url: 'https://innico.nl',
        description: [
            'Innico is a software company in Enschede building a sales-first S&OP platform – helping wholesale and production SMEs replace spreadsheets with data-driven forecasting, inventory management, and pricing.',
            "I joined early as a Full Stack Engineer and in-house Data Scientist, designing and building the core backend: automated order entry, customer-level pricing with approval workflows, and AI-driven demand forecasting. As the product matured, I was involved in the migration to a multi-tenant PostgreSQL architecture and led the modernization of the API layer for type-safety and long-term maintainability – enabling Innico to scale from one client to a true SaaS product. The platform became the client's single source of truth, cutting manual work, improving forecast accuracy, and reducing new-client onboarding from months to days.",
        ],
        logoSrc: innicoLogo,
        backgroundColor: '#121c32',
    },

    {
        companyTitle: 'Netlight',
        role: 'IT Consultant',
        url: 'https://netlight.com',
        description: [
            "Netlight is a European digital consulting firm that engages deeply in clients' digital challenges – combining competence, creativity, and business sense. The model is built on collaboration and knowledge sharing: consultants work as committed co-creators, and engagements are matched to where they can deliver the most value.",
            "Since joining in early 2026, I've worked across varied contexts – from a two-week authentication migration for a German digital fashion startup, to a long-term engagement on the ML platform of a large-scale consumer tech company closer to home. At the startup, I led the rapid elimination of a Firebase dependency, running old and new systems in parallel to de-risk the cutover and strengthen GDPR posture ahead of enterprise onboarding. In my current engagement at the tech company, I work on GenAI features and ML-driven workflows at scale, building and operating orchestration pipelines for agentic AI systems in a large, fast-moving engineering organization.",
            "The common thread across projects has been fast ramp-up, immediate ownership of complex technical problems, and consistent depth in AI and software engineering regardless of domain.",
        ],
        logoSrc: netlightLogo,
        backgroundColor: '#A29AFF',
    }
]