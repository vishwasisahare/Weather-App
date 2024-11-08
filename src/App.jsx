

import React, { useState } from "react";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import Favorites from "./components/Favorites";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div >
    <div className="">
      <h1 className="text-center text-5xl font-bold mt-16 p-5 text-white">Weather Dashboard</h1>
      <div className="p-10 bg-white/40 md:w-[45%] w-[90%] max-h-[80%]  rounded-xl text-center md:ml-[25%] ml-5 mt-12 shadow-emerald-700 ">

     
      <Search setCity={setCity} />
      <WeatherDisplay city={city} setWeatherData={setWeatherData} />
      <Favorites setCity={setCity} />

      </div>
    </div>
    </div>
  );
}        

export default App;
