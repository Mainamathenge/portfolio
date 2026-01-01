import './EducationCard.css';

export default function EducationCard({ education }) {
    return (
        <div className="education-card card">
            <div className="education-status">{education.status}</div>
            <h3 className="education-degree">{education.degree}</h3>
            <div className="education-institution">{education.institution}</div>
            <div className="education-period">{education.period}</div>

            {education.grade && (
                <div className="education-grade">{education.grade}</div>
            )}

            {education.focus && (
                <div className="education-focus">
                    <strong>Focus:</strong> {education.focus}
                </div>
            )}

            <p className="education-description">{education.description}</p>
        </div>
    );
}
