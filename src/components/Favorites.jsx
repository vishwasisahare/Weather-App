

import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/favorites";

function Favorites({ setCity }) {
  const [favorites, setFavorites] = useState([
    'Delhi',
    'pune',
    'Banglore'
  ]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const res = await axios.get(API_URL);
      setFavorites(res.data);
    };
    fetchFavorites();
  }, []);

  const addFavorite = async () => {
    const newCity = prompt("Enter city to add to favorites:");
    if (newCity) {
      await axios.post(API_URL, { name: newCity });
      setFavorites([...favorites, { name: newCity }]);
    }
  };

  const removeFavorite = async (city) => {
    await axios.delete(`${API_URL}/${city.id}`);
    setFavorites(favorites.filter((c) => c.id !== city.id));
  };

  return (
    <div>
      <h3 className="text-2xl font-bold">Favorites City here</h3>

      <button onClick={addFavorite} className="bg-blue-500 hover:bg-blue-700 md:text-lg text-sm text-white md:rounded-2xl rounded-lg md:p-3 p-2 md:ml-10 -ml-0.5 md:w-[25%] w-[50%] mt-5 ">Add Favorite City</button>
      <ul className="justify-between">
        {favorites.map((city) => (
          <li key={city.id} className="justify-between">
            <span onClick={() => setCity(city.name)} className="text-xl">  {city.name}      ----------------------------          </span>
            <button onClick={() => removeFavorite(city)}  className="bg-red-400 hover:bg-red-700 md:text-lg text-sm text-white md:rounded-2xl rounded-lg md:p-3 p-2 md:ml-10 -ml-0.5 md:w-[20%] w-[30%] mt-5 ">                Remove</button>
          </li>
        ))}
      </ul>
     
    </div>
  );
}

export default Favorites;
