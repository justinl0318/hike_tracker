import React, { useEffect } from "react";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios"

function DeleteUser() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    console.log(username)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password)
        try {
            console.log(username, password)
            const response = await Axios.delete(
                "http://localhost:5000/users/delete", {
                    data: {
                        username,
                        password
                    }
                }
            );
            if (response.data.success) {
                navigate("/")
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
                        <h1>Delete</h1>
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
                        <button type="submit">Delete</button>
                        <div className="register-link">
                            <p>Back to Home
                                <Link to="/">
                                    <a href="#">Home</a>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default DeleteUser