import React, { useState, useEffect } from "react";
import Weather from "./Weather/Weather";
import "./Mountain.css"
import JumpBar from "./Jumpbar";
import { Element } from "react-scroll";
import GoogleMapReact from 'google-map-react';
import MountainPinpoint from "./MountainPinpoint";

const weather_api_key = ""
const map_api_key = "" 
const taiwanProps = {
    center: {
        lat: 23.6978,
        lng: 120.9605
    },
    zoom: 8
}

function Mountain( { mountain } ) {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    const storedUsername = localStorage.getItem('usernameGlobal')
    
    useEffect(() => {
        fetchWeather();
    }, []);

    const fetchWeather = async () => {
        try {
            const url = `
                http://api.weatherapi.com/v1/
                forecast.json?
                &key=${weather_api_key}
                &q=${mountain.coordinates.lat},${mountain.coordinates.lng}
                &days=10
            `;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setWeatherData(data);
            setLoading(false);
            
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setLoading(false);
        }
    };

    return (
        <>
            <JumpBar></JumpBar>
            <div className="mountain-container">
                <div className="vertical info" style={{width: "82vw"}}>
                    <Element name="main"> 
                        <div className="mountain-info">
                            <div className="description">
                                <h3 style={{fontWeight: "bold"}}>{mountain.name}</h3>
                                <p>{mountain.info}</p>
                            </div>
                            <div className="image">
                                <img src={require(`../../../../server/User/${storedUsername}/${mountain.id}.jpg`)}/>
                            </div>
                        </div>
                    </Element>
                </div>
                
                {loading ? 
                ( <p style={{margin: "20px 0px"}}>Loading...</p> ) : 
                (
                    <div className="vertical info">
                        <div style={{width: "80vw"}}>
                            <h3>Weather Forecast</h3>
                            <Element name="weather">
                                {/* <div>
                                    {weatherData && (
                                        <div>
                                            <p>Location: {weatherData.location.name}, {weatherData.location.country}</p>
                                            <p>Temperature: {weatherData.current.temp_c}°C</p>
                                            <p>Condition: {weatherData.current.condition.text}</p>
                                            <img src={weatherData.current.condition.icon} alt="Weather Icon" />
                                        </div>
                                    )}
                                </div> */}
                                <Weather w={weatherData}>

                                </Weather>
                            </Element>
                        </div>
                        <div className="moreinfo">
                            Weather fetched from 
                            <a href="https://www.weatherapi.com/"> freeweatherapi</a>
                            , last updated: {weatherData.current.last_updated}
                        </div>
                    </div>
                    
                    
                )}
                

                <div className="vertical info">
                    <h3>Location</h3>
                    <Element name="location">
                        <div style={{height: '100vh', width:"80vw"}}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: map_api_key }}
                                defaultCenter={taiwanProps.center}
                                defaultZoom={taiwanProps.zoom}
                            >
                                <MountainPinpoint 
                                    key={mountain.id}
                                    lat={mountain.coordinates.lat}
                                    lng={mountain.coordinates.lng}
                                    name={mountain.name}
                                />
                            </GoogleMapReact>
                        </div>
                    </Element>
                </div>
                
            </div>  
        </>
    );
}

export default Mountain;
