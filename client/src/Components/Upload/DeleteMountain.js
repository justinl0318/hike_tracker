import { useState } from "react";
import React from "react";
import NavBar from "../Navbar";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteMountain() {
    const [mountainName, setMountainName] = useState('');
    const storedUsername = localStorage.getItem('usernameGlobal');
    const navigate = useNavigate()

    const handleChange = (e) => {
        setMountainName(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!mountainName) {
            alert('Please enter a mountain Name.');
            return;
        }

        try {
            const response = await Axios.delete(`http://localhost:5000/users/${storedUsername}/mountains/delete`, {
                data: {
                    username: storedUsername,
                    mountainName: mountainName,
                }
            })

            if (response.data.success) {
                navigate("/delete-mountain")
                alert('Mountain deleted successfully.');
                setMountainName('');  // Reset the input after successful deletion

            } else {
                alert(response.data.message)
            }
        } catch (error) {
            console.error('Error deleting mountain:', error);
        }
    }

    return (
        <>
            <NavBar></NavBar>
            <div className="form-container">
                <form className="upload-form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <label className="upload-label" htmlFor="id">Name:
                        <input type="text" id="Name" name="Name" onChange={handleChange} placeholder="Name"/>
                    </label>
                    <button type="submit">Delete Mountain</button>
                </form>
            </div>
        </>
    )
}

export default DeleteMountain