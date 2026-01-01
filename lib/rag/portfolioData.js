export const portfolioData = {
    personal: {
        name: "Joseph Maina",
        title: "AI-First Software Engineer",
        tagline: "Building scalable, production-grade platforms for Africa and beyond",
        location: "Nairobi, Kenya",
        email: "mainamathengej@gmail.com",
        phone: "+254 725 589 706",
        linkedin: "https://linkedin.com/in/joseph-maina-836701181",
        github: "https://github.com/josephmaina"
    },

    experienceSummary: {
        totalYears: 5,
        startYear: 2020,
        statement:
            "5+ years of professional and research-driven software engineering experience across backend systems, fintech platforms, AI/ML solutions, and IoT-enabled infrastructure.",
        focus: [
            "Backend engineering with Java and Spring Boot",
            "Fintech and payment systems",
            "Distributed systems and event-driven architecture",
            "AI-powered platforms",
            "IoT-integrated systems"
        ]
    },

    about: `Software Engineer with 5+ years of experience building backend systems, fintech platforms, and cloud-native applications. Specialized in Java and Spring Boot microservices, distributed systems using Kafka and Redis, and production deployments on Kubernetes with observability via Prometheus and Grafana. Currently pursuing an MSc in Electrical and Computer Engineering at Carnegie Mellon University Africa, focusing on Advanced AI, Cloud Computing, Security, and Architecture. Passionate about leveraging technology to solve real-world problems and democratize access to computational resources across Africa.`,

    education: [
        {
            id: 1,
            degree: "MSc in Electrical and Computer Engineering",
            institution: "Carnegie Mellon University Africa",
            period: "Aug 2025 - May 2027",
            status: "In Progress",
            focus: "Advanced AI, Cloud Computing, Security, and Architecture",
            description:
                "Advanced studies in AI systems, cloud-native architectures, distributed systems, and security engineering."
        },
        {
            id: 2,
            degree: "Bachelor of Science in Mechatronic Engineering",
            institution: "Dedan Kimathi University of Technology",
            period: "May 2018 - Apr 2023",
            status: "Completed",
            grade: "Second Class Honors, Upper Division",
            description:
                "Specialized in industrial automation, IoT systems, embedded systems, and data-driven engineering solutions."
        }
    ],

    certifications: [
        {
            id: 1,
            name: "Spring Boot 3 & Spring Hibernate",
            issuer: "Professional Certification",
            date: "2024",
            description: "Advanced Java backend development with the Spring ecosystem"
        },
        {
            id: 2,
            name: "Mastering Microservices",
            issuer: "Professional Certification",
            date: "2024",
            description:
                "Microservices architecture using Java, Spring Boot, Docker, Kubernetes, Helm, and security best practices"
        },
        {
            id: 3,
            name: "Building AI-based Recommendation Algorithms",
            issuer: "Professional Certification",
            date: "2024",
            description: "Design and implementation of personalization engines at scale"
        },
        {
            id: 4,
            name: "Deep Learning Specialization",
            issuer: "NVIDIA Deep Learning Institute",
            date: "2021",
            description:
                "Computer vision and deep learning on Jetson Nano, real-time object detection",
            credential: "NVIDIA Certified Instructor"
        },
        {
            id: 5,
            name: "Siemens Mechatronic System Associate",
            issuer: "Siemens",
            date: "2021",
            description: "Industrial automation systems (Levels 1 & 2)"
        }
    ],

    projects: [
        {
            id: 1,
            title: "CANEX Platform – Creative Industry Marketplace",
            description:
                "Architected and developed Java Spring Boot microservices supporting 50K+ users, with AI-powered recommendations and integrated payment processing.",
            extendedDescription:
                "Led the backend architecture for CANEX, a large-scale creative industry marketplace. Designed and implemented distributed microservices handling user onboarding, content management, payments, and AI-driven recommendations. The platform leverages Redis for caching, Kafka for asynchronous event processing, and runs on Kubernetes with production monitoring via Prometheus and Grafana.",
            technologies: [
                "Java",
                "Spring Boot",
                "Microservices",
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Docker",
                "Kubernetes",
                "AWS",
                "Prometheus",
                "Grafana"
            ],
            impact:
                "50K+ active users, AI-driven personalization, production-grade fintech infrastructure",
            category: "Fintech / Enterprise Platform",
            highlights: [
                "Architected scalable microservices architecture",
                "Implemented AI recommendation engine",
                "Integrated payment processing systems",
                "Redis-based caching for performance optimization",
                "Kafka-driven asynchronous workflows",
                "Production monitoring with Prometheus and Grafana"
            ],
            images: [
                "/projects/canex/canex.png",
                "/projects/canex/dashboard.png",
                "/projects/canex/mobile.png"
            ]
        },

        {
            id: 2,
            title: "IATF – Intra-African Trade Platform",
            description:
                "Built secure B2B backend systems for cross-border African trade with PCI DSS and GDPR compliance.",
            extendedDescription:
                "Developed and maintained backend services for the IATF platform, enabling secure B2B interactions across multiple African markets. Implemented event-driven workflows using Kafka, Redis-based caching, and Kubernetes-based deployments with full observability via Grafana and Prometheus.",
            technologies: [
                "Java",
                "Spring Boot",
                "PostgreSQL",
                "Keycloak",
                "Kafka",
                "Redis",
                "Docker",
                "Kubernetes",
                "Prometheus",
                "Grafana",
                "Security",
                "Compliance"
            ],
            impact:
                "Securely enabled cross-border trade and investment across Africa",
            category: "B2B / Fintech",
            highlights: [
                "PCI DSS and GDPR compliance implementation",
                "Event-driven architecture using Kafka",
                "Redis-based caching for performance and scalability",
                "Kubernetes-based production deployments",
                "End-to-end monitoring using Grafana"
            ],
            images: [
                "/projects/iatf/iatf.png",
                "https://placehold.co/800x600/1e293b/cbd5e1?text=Trade+Corridors"
            ]
        },

        {
            id: 3,
            title: "IoT-Enabled Asset Financing & Hire Purchase Platform",
            description:
                "Built an IoT-enabled hire purchase platform enabling asset financing with mobile payments and remote device enforcement.",
            extendedDescription:
                "Designed a fintech platform enabling users to acquire income-generating assets through flexible installment-based financing. Integrated Safaricom M-Pesa for mobile payments, SMS notifications, and custom IoT devices for usage tracking, tamper detection, and remote asset enable/disable based on payment compliance.",
            technologies: [
                "Java",
                "Vue.js",
                "Safaricom M-Pesa APIs",
                "IoT Device Communication",
                "Location Tracking",
                "SMS Notifications"
            ],
            impact:
                "Reduced asset financing risk while enabling access to productive assets",
            category: "Fintech / IoT",
            highlights: [
                "Custom installment-based hire purchase agreements",
                "Mobile-first payments using M-Pesa",
                "IoT-based asset tracking and enforcement",
                "Fail-safe mechanisms for tamper detection"
            ],
            images: [
                "/projects/iot-financing/dashboard.png",
                "/projects/iot-financing/device_map.png"
            ]
        },

        {
            id: 4,
            title: "Clean Tech Tracker",
            description:
                "Built a data intelligence platform tracking investments and projects in Europe’s clean energy sector.",
            extendedDescription:
                "Designed and implemented data pipelines that scrape, normalize, and analyze clean energy news and reports. Applied LLM-based extraction techniques to generate structured insights for investors and policymakers.",
            technologies: [
                "Python",
                "FastAPI",
                "RAG",
                "Web Scraping",
                "Data Analysis"
            ],
            impact:
                "Improved transparency in clean energy investment tracking",
            category: "Data Engineering",
            images: [
                "/projects/clean-tech/dashboard.png",
                "/projects/clean-tech/analytics.png"
            ]
        }
    ],

    skills: {
        "Backend Languages & Frameworks": [
            "Java",
            "Spring Boot",
            "Node.js",
            "Python"
        ],

        "Distributed Systems & Messaging": [
            "Kafka",
            "Event-Driven Architecture",
            "Redis",
            "Caching Strategies"
        ],

        "Cloud, DevOps & Observability": [
            "Docker",
            "Kubernetes",
            "CI/CD",
            "AWS",
            "Azure",
            "Prometheus",
            "Grafana"
        ],

        "Databases & Data Engineering": [
            "PostgreSQL",
            "MongoDB",
            "Data Modeling",
            "ETL Pipelines"
        ],

        "AI & Machine Learning": [
            "Machine Learning",
            "Deep Learning",
            "Computer Vision",
            "RAG",
            "AI Recommendation Systems",
            "PyTorch"
        ],

        "Fintech & Payments": [
            "Safaricom M-Pesa APIs",
            "Payment Integrations",
            "Transaction Processing",
            "PCI DSS Compliance"
        ],

        "IoT & Systems Integration": [
            "IoT Device Communication",
            "Location Tracking",
            "Remote Device Control",
            "Tamper Detection"
        ],

        "Engineering Practices & Leadership": [
            "System Design",
            "Technical Documentation",
            "Agile Methodologies",
            "Team Leadership"
        ]
    },

    experience: [
        {
            id: 1,
            role: "Software Engineer",
            company: "Qhala",
            period: "Mar 2023 - Present",
            location: "Nairobi, Kenya",
            positions: [
                {
                    title: "Senior Backend Engineer – CANEX Platform",
                    description:
                        "Architected and operated distributed microservices using Java and Spring Boot, leveraging Kafka, Redis, Kubernetes, and Grafana for production-scale reliability."
                },
                {
                    title: "Senior Backend Engineer – IATF Platform",
                    description:
                        "Built secure, compliant backend services using event-driven architecture with Kafka and Redis, deployed on Kubernetes with full observability."
                }
            ]
        },
        {
            id: 2,
            role: "Research Assistant",
            company: "Dedan Kimathi University of Technology",
            period: "Aug 2022 - Oct 2024",
            location: "Nyeri, Kenya",
            description:
                "Applied research across clean energy systems, AI, computer vision, and industrial automation.",
            positions: [
                {
                    title: "AI Research Assistant – Center for Biomass and Energy Studies",
                    description:
                        "Led data-driven research for green energy transitions in tea processing factories."
                },
                {
                    title: "Computer Vision Researcher – Siemens Training Center",
                    description:
                        "Developed computer vision pipelines for 3D prosthetic socket modeling."
                }
            ]
        }
    ],

    community: [
        {
            role: "NVIDIA Deep Learning Institute Ambassador",
            period: "2022 - Present"
        },
        {
            role: "EdgeML Day Kenya Speaker",
            year: "2023"
        }
    ]
};
