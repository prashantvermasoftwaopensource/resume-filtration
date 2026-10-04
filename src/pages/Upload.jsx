import "./Upload.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Upload(){

    const[file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleUpload(){


        if(!file){
            alert("Please select a resume");
            return;
        }
    
        setLoading(true);
        console.log("Uploading:", file.name);

        setTimeout(async()=>{
            const res = await fetch("http://localhost:3001/result");
            const data = await res.json();
            console.log(data);
            navigate("/result", {
                state: data
            });

        },2000);

        
    }
    return(
        
        <div className="upload-container">
            <h1>Upload Resume</h1>

            <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <div className="upload-actions">
                <label htmlFor="resume" className="file-label">
                    Choose Resume
                </label>

                {file && <p>Selected file: {file.name}</p>}

                <button
                    onClick={handleUpload}
                    disabled={!file || loading}
                >
                    {loading ? "Uploading..." : "Upload Resume"}
                </button>
            </div>
        </div>
);
}

export default Upload;