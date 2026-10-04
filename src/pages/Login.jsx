import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./Login.css";

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(e){

        e.preventDefault();

        console.log("Form Submitted");

        if(email === "" || password === ""){
            alert("Please fill all fields");
            return;
        }

        navigate("/upload");
    }
    return(

        <div className="login-container">
            <div className="login-card">

                <h1>Sign In</h1>
                <form onSubmit={handleLogin}>

                {/* <h1>Login Page</h1> */}

                <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <button type="submit">Login</button>

                </form>
            </div>
        </div>
    );
}

export default Login;