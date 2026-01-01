import './CertificationCard.css';

export default function CertificationCard({ certification }) {
    return (
        <div className="certification-card card">
            <div className="cert-header">
                <h3 className="cert-name">{certification.name}</h3>
                <div className="cert-date">{certification.date}</div>
            </div>

            <div className="cert-issuer">{certification.issuer}</div>

            <p className="cert-description">{certification.description}</p>

            {certification.credential && (
                <div className="cert-credential">
                    <span className="credential-badge">✓</span>
                    {certification.credential}
                </div>
            )}

            {certification.skills && (
                <div className="cert-skills">
                    {certification.skills.map((skill, index) => (
                        <span key={index} className="tag">{skill}</span>
                    ))}
                </div>
            )}
        </div>
    );
}
