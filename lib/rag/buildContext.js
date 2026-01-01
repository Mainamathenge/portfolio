import { portfolioData } from "./portfolioData.js";

export function buildRagContext(question) {
    const q = question.toLowerCase();
    let context = "";

    if (q.includes("project")) {
        context += "PROJECTS:\n";
        portfolioData.projects.forEach(p => {
            context += `- ${p.title}: ${p.description}. Technologies: ${p.technologies.join(
                ", "
            )}. Impact: ${p.impact}\n`;
        });
    }

    if (q.includes("skill") || q.includes("technology")) {
        context += "\nSKILLS:\n";
        Object.entries(portfolioData.skills).forEach(([k, v]) => {
            context += `- ${k}: ${v.join(", ")}\n`;
        });
    }

    if (q.includes("who") || q.includes("about")) {
        context += `\nABOUT:\n${portfolioData.about}\n`;
    }

    if (q.includes("education") || q.includes("degree") || q.includes("university")) {
        context += "\nEDUCATION:\n";
        portfolioData.education.forEach(edu => {
            context += `- ${edu.degree} at ${edu.institution} (${edu.period})\n`;
            context += `  ${edu.description}\n`;
        });
    }

    if (q.includes("certification") || q.includes("certified")) {
        context += "\nCERTIFICATIONS:\n";
        portfolioData.certifications.forEach(cert => {
            context += `- ${cert.name} from ${cert.issuer} (${cert.date})\n`;
            context += `  ${cert.description}\n`;
        });
    }

    if (q.includes("experience") || q.includes("work") || q.includes("job")) {
        context += "\nEXPERIENCE:\n";
        portfolioData.experience.forEach(exp => {
            context += `- ${exp.role} at ${exp.company} (${exp.period})\n`;
            if (exp.positions) {
                exp.positions.forEach(pos => {
                    context += `  * ${pos.title}: ${pos.description}\n`;
                });
            } else if (exp.description) {
                context += `  ${exp.description}\n`;
            }
        });
    }

    // fallback: lightweight full context
    if (!context) {
        context = `
ABOUT:
${portfolioData.about}

NAME: ${portfolioData.personal.name}
TITLE: ${portfolioData.personal.title}

PROJECTS:
${portfolioData.projects
                .map(p => `${p.title}: ${p.description}`)
                .join("\n")}

SKILLS:
${Object.entries(portfolioData.skills)
                .map(([k, v]) => `${k}: ${v.join(", ")}`)
                .join("\n")}
`;
    }

    return context;
}
