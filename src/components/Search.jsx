
import React, { useState } from "react";

function Search({ setCity }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setCity(input);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
         className="block w-full rounded-md border-0 md:py-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 bg-blue-50 "
      />
      <div className="align-middle"><button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 md:text-lg text-sm text-white md:rounded-2xl rounded-lg md:p-3 p-2 md:ml-10 -ml-0.5 md:w-[22%] w-[30%] mt-5 ">Search</button></div>
      
    </div>
  );
}

export default Search;
