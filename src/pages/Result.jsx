import "./Result.css";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
    const location = useLocation();
    const navigate = useNavigate();

    if (!location.state) {
        return <Navigate to="/upload" />;
    }
    return (
        <div className="result-container">

            <h1>Resume Filtration Result</h1>

            <p>Resume: {location.state?.fileName || "No resume selected"}</p>

            <div className="score-card">
                <h2>Match Score</h2>
                <p>{location.state?.score}%</p>
            </div>

            <div className="status-card">
                <h2>Status</h2>
                <p>{location.state?.status}</p>
            </div>

            <div className="skills-card">
                <h2>Skills Matched</h2>

                <ul>
                    {location.state?.matchedSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>   
            </div>

            <div className="result-actions">
                <button onClick={() => navigate("/upload")}>
                    Upload Another Resume
                </button>
            </div>

        </div>
    );
}

export default Result;