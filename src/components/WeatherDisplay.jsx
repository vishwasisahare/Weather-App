

import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "a39efad661b469d4355be081b84c2c16";

function WeatherDisplay({ city, setWeatherData }) {
  const [forecast, setForecast] = useState(null);
  const [unit, setUnit] = useState("metric");

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const currentWeather = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        const weatherForecast = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
        );
        setWeatherData(currentWeather.data);
        setForecast(weatherForecast.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };
    
    fetchWeather();
  }, [city , unit]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-600 p-7">Weather in Current City {city}</h2>

      <button onClick={toggleUnit} className="text-xl text-blue-600 underline">
        Toggle to {unit === "metric" ? "Fahrenheit" : "Celsius"}
      </button>

      {forecast && (
        <div className="p-5">
          <h3 className="text-3xl bg-gray-300 p-5  rounded-xl">Current Temperature: <span className="text-5xl">{forecast.list[0].main.temp}°{unit === "metric" ? "C" : "F"}</span></h3>
          <h4 className="text-2xl mt-5 font-bold text-blue-500">5-Day Forecast:</h4>
          <ul className="p-5 text-xl bg-blue-200 rounded-lg mt-4 ">
            {forecast.list.slice(0, 5).map((day, index) => (
              <li key={index}>
                 {day.dt_txt}: {day.main.temp}°{unit === "metric" ? "C" : "F"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;
