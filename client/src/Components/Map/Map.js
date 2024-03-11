import React from "react";
import { useState } from "react";
import GoogleMapReact from 'google-map-react';
import mountains_list from "../Assets/mountainslist";
import Pinpoint from "./pinpoint";
import "./Map.css"

// apikey for using google map
const apiKey = ""

function Map(){

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