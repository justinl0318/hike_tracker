import React, { useEffect } from "react";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Axios from "axios"

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    console.log(username)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password)
        try {
            const response = await Axios.post(
                "http://localhost:5000/register",
                {username, password}
            );
            if (response.data.success) {
                window.location.href = "/";
            }
            else{
                alert(response.data.message);
            }
        }
        catch (error) {
            alert("An error occurred. Please try again later.");
        }  
    }

    return (
        <>
            <div className="background">
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <h1>Register</h1>
                        <div className="input-box">
                            <input 
                                type="text" 
                                placeholder="Username" 
                                onChange={(e) => setUsername(e.target.value)}
                                required>
                            </input>
                            <FaUser className="icon"/>
                        </div>
                        <div className="input-box">
                            <input 
                                type="password" 
                                placeholder="Password" 
                                onChange={(e) => setPassword(e.target.value)}
                                required>
                            </input>
                            <FaLock className="icon"/>
                        </div>
                        <button type="submit">Register</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
