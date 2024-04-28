import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Axios from "axios"

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    console.log(username)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password)
        try {
            const response = await Axios.post(
                "http://localhost:5000/users/login",
                {username, password}
            );
            if (response.data.success) {
                localStorage.setItem('usernameGlobal', username)
                navigate("/homepage")
            }
            else{
                alert(response.data.message);
            }
        }
        catch (error) {
            alert("An error occurred. Please try again later.");
        }
    }

    const fetchUsernames = async() => {
        try {
            const response = await Axios.get("http://localhost:5000/users/");
            const data = await response.data;
            console.log(data)
            // Convert array of usernames into a single string, then show it in an alert
            const usernamesList = data.map(user => user.username).join(', ');
            alert('Usernames: ' + usernamesList);
        } catch (error) {
            alert("An error occurred. Please try again later.");
        }
    }

    return (
        <>
            <div className="background">
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
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
                        
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox"></input>
                                Remember me
                                </label>
                            <a href="#">Forgot password</a>
                        </div>

                        <button type="submit">Login</button>
                        <div className="register-link">
                            <p>Don't have an account?
                                <Link to="/register">
                                    <a href="#">Register Now</a>
                                </Link>
                            </p>
                        </div>
                        <div className="delete-link">
                            <p>Delete an account
                                <Link to="/delete-user">
                                    <a href="#">Delete</a>
                                </Link>
                            </p>
                        </div>

                        <button type="button" onClick={fetchUsernames} style={{
                            width: '5vw', 
                            fontSize: '13px',
                            height: '30px', 
                            backgroundColor: "darkgray", 
                            marginLeft: '260px'}}>List Users</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login

