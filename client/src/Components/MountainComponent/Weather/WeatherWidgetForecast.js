import React from "react";
import "./WeatherWidgetForecast.css"
import { FaCloudRain } from "react-icons/fa";
import { BsFillSunriseFill } from "react-icons/bs";
import { BsFillSunsetFill } from "react-icons/bs";

function WeatherWidgetForecast({ curr }) {
    return (
        <div className="weather-widget">
            <div className="date">
                {curr.date}
            </div>
            <div className="weather-icon">
            <   img src={curr.day.condition.icon} alt="Weather Icon" />
            </div>
            <div className="temperature">
            </div>
            <div className="weather-description">
                {curr.day.condition.text}
            </div>
            <div className="info low-high">
                {curr.day.mintemp_c} - {curr.day.maxtemp_c} *C
            </div>
            <div className="info sunsetrise">
                <BsFillSunriseFill style={{fontSize: '16px', paddingTop: '3px'}} />
                {" " + curr.astro.sunrise + "  "} 
                <BsFillSunsetFill style={{fontSize: '16px', paddingTop: '3px'}} />
                {" " + curr.astro.sunset}
            </div>

            <div className="info humidity">
                <FaCloudRain style={{fontSize: '16px', paddingTop: '2px'}}></FaCloudRain>
                {" " + curr.day.daily_chance_of_rain}%
            </div>
        </div>
    )
}

export default WeatherWidgetForecast