import React from "react";
import NavBar from "../Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./Upload.css";

function Upload() {
    const [mountains_list, setMountain_list] = useState([]);
    const [imageFile, setImageFile] = useState(null);
    const navigate = useNavigate();

	const storedUsername = localStorage.getItem('usernameGlobal')
	useEffect(() => {
		const fetchMountainData = async () => {
			try {
				const response = await Axios.get(`http://localhost:5000/users/${storedUsername}/mountains`);
				setMountain_list(response.data); //set value
			} catch (error) {
				console.error('Error fetching mountain data:', error);
			}
		}

		fetchMountainData();
	}, []); // Empty dependency, runs only once initially

    const [mountainData, setMountainData] = useState({
        id: '',
        name: '',
        coordinates: {
            lat: '',
            lng: ''
        },
        altitude: '',
        checked: false,
        info: ''
    });

    useEffect(() => {
        if (mountains_list.length > 0) {
            // Get the id of the last element in the list and increment it
            const lastId = mountains_list[mountains_list.length - 1].id;
            setMountainData(prevData => ({
                ...prevData,
                id: lastId + 1
            }));
        } else {
            // If the list is empty, start from 1
            setMountainData(prevData => ({
                ...prevData,
                id: 1
            }));
        }
    }, [mountains_list]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name)
        // console.log(value)
        if (name === "lat" || name === "lng") {
            setMountainData(prevData => ({
                ...prevData,
                coordinates: {
                    ...prevData.coordinates,
                    [name]: value
                }
            }));
        } else if (name === "checked") {
            setMountainData(prevData => ({
                ...prevData,
                [name]: e.target.checked
            }));
        } else {
            setMountainData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0])
        console.log(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate data
        const { id, name, coordinates, altitude, info } = mountainData
        const { lat, lng } = coordinates

        // Check for empty fields
        if (!name.trim() || !lat.trim() || !lng.trim() || !altitude.toString().trim() || !info.trim()) {
            alert("Please fill in all fields.");
            return;
        }

        if (isNaN(lat) || isNaN(lng) || isNaN(altitude)) { // NaN: Not a Number
            alert("Please enter valid numbers for latitude and longitude and altitude.");
            return;
        }


        // Create FormData and append data
        const formData = new FormData()
        formData.append('id', id);
        formData.append('name', name);
        formData.append('lat', lat);
        formData.append('lng', lng);
        formData.append('altitude', altitude);
        formData.append('checked', mountainData.checked);
        formData.append('info', info);
        if (imageFile) {  // Ensure there is a file selected
            formData.append('image', imageFile, imageFile.name);
        }

        try {

            const response = await Axios.post(`http://localhost:5000/users/${storedUsername}/mountains/upload/${mountainData.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // console.log(mountainData)
            console.log('Mountain uploaded successfully:', response.data);
            if (response.data.success) {
                alert(response.data.message)
                navigate("/upload")
            }
            else{
                alert(response.data.message);
            }
            // Reset form or provide user feedback
        } catch (error) {
            console.error('Error uploading mountain:', error);
            // Handle errors, provide user feedback
        }
    };

    return (
        <>
            <NavBar></NavBar>
            <div className="form-container">
                <form className="upload-form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <label className="upload-label" htmlFor="id">ID:
                        <input type="text" id="id" name="id" value={mountainData.id} onChange={handleChange} placeholder="ID" disabled />
                    </label>
                    <label className="upload-label" htmlFor="name">Name:
                        <input type="text" id="name" name="name" value={mountainData.name} onChange={handleChange} placeholder="Name" />
                    </label>
                    <label className="upload-label" htmlFor="lat">Latitude:
                        <input type="text" id="lat" name="lat" value={mountainData.coordinates.lat} onChange={handleChange} placeholder="Latitude" />
                    </label>
                    <label className="upload-label" htmlFor="lng">Longitude:
                        <input type="text" id="lng" name="lng" value={mountainData.coordinates.lng} onChange={handleChange} placeholder="Longitude" />
                    </label>
                    <label className="upload-label" htmlFor="altitude">Altitude:
                        <input type="text" id="altitude" name="altitude" value={mountainData.altitude} onChange={handleChange} placeholder="Altitude" />
                    </label>
                    <label className="upload-label" htmlFor="checked">Summitted:
                        <input type="checkbox" id="checked" name="checked" checked={mountainData.checked} onChange={handleChange} />
                    </label>
                    <label className="upload-label" htmlFor="info">Information:
                        <textarea id="info" name="info" value={mountainData.info} onChange={handleChange} placeholder="Information about the mountain" />
                    </label>
                    <label className="upload-label" htmlFor="image">Mountain Image:
                        <input type="file" id="image" name="image" onChange={handleImageChange} />
                    </label>
                    <button type="submit">Upload Mountain</button>
                </form>
            </div>
        </>
    )
}

export default Upload