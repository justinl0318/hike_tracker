import React from "react";
import WeatherWidgetForecast from "./WeatherWidgetForecast";
import "./Weather.css"

function Weather({ w }) {
    console.log(w)
    const today = w.forecast.forecastday[0];

    return (
        <>
            <div className="container">
                <div className="today">
                </div>
                    {/* <WeatherWidget curr={today} />
                    <h5>Today</h5>
                    text: {today.day.condition.text} <br/>
                    date: {today.date} <br/>
                    sunrise: {today.astro.sunrise} <br/>
                    sunset: {today.astro.sunset} <br/>
                    range: {today.day.mintemp_c} - {today.day.maxtemp_c} *C <br/>
                    icon: <img src={today.day.condition.icon} alt="Weather Icon" /> 
                    <br/>
                    chanceofrain: {today.day.daily_chance_of_rain}% <br/>
                    {today.hour.map(curr_hour => (
                        <div>
                            time: {curr_hour.time} <br/>
                            icon: <img src={curr_hour.condition.icon} alt="Weather Icon" />
                            <br/>
                            temperature: {curr_hour.temp_c} <br/>
                        </div>
                    ))}
                    <br/>
                </div>
                <div>

                    {w.forecast.forecastday.map(curr => (
                        <div>
                            text: {curr.day.condition.text} <br/>
                            date: {curr.date} <br/>
                            sunrise: {curr.astro.sunrise} <br/>
                            sunset: {curr.astro.sunset} <br/>
                            range: {curr.day.mintemp_c} - {curr.day.maxtemp_c} *C <br/>
                            icon: <img src={curr.day.condition.icon} alt="Weather Icon" />
                            <br/>
                            chanceofrain: {curr.day.daily_chance_of_rain}% <br/>
                            <br/>
                        </div>
                    ))}
                */}
                <div className="horizontal-window">
                    <div className="forecast-grid">
                        {w.forecast.forecastday.map(curr => (
                            <WeatherWidgetForecast key={curr.date} curr={curr}></WeatherWidgetForecast>
                        ))}
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Weather;