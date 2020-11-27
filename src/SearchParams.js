import React, { useState } from "react";
import useDropdown from "./useDropdown";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("Delhi,India");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);
  return (
    <div className="search-params">
      <h1>{location}</h1>
      <h1>{animal}</h1>
      <label htmlFor="location">
        location
        <input
          id="location"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
          onBlur={(e) => setLocation(e.target.value)}
        />
      </label>
      <AnimalDropdown />
      <BreedDropdown />
      <button>Search</button>
    </div>
  );
};

export default SearchParams;
