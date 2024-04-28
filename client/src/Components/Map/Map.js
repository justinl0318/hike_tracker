import React from "react";
import { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import Pinpoint from "./pinpoint";
import "./Map.css"
import Axios from "axios";

// apikey for using google map
const apiKey = "AIzaSyByj3THssrjQW90MEQcdCgaYwb6L-cih9s"

function Map(){

	const [mountains_list, setMountain_list] = useState([])

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



	const taiwanProps = {
		center: {
			lat: 23.6978,
			lng: 120.9605
		},
		zoom: 8
	}

	return (
		// <div className="map">
		// 	{mountains.map((mountain, index) => (
		// 		<Pinpoint 
		// 			key={index}
		// 			lat={mountain.coordinates.lat}
		// 			lng={mountain.coordinates.lng}
		// 			name={mountain.name}
		// 		/>
		// ))}
		// </div>

		<div className="map">
		{ <GoogleMapReact
			bootstrapURLKeys={{ key: apiKey }}
			defaultCenter={taiwanProps.center}
			defaultZoom={taiwanProps.zoom}
		>
			{mountains_list.map((mountain, index) => (
				<Pinpoint 
					key={index}
					lat={mountain.coordinates.lat}
					lng={mountain.coordinates.lng}
					name={mountain.name}
				/>
			))}
		</GoogleMapReact>}
		</div>
	);
}

export default Map;