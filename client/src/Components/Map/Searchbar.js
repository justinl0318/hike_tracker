import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Searchbar.css";

function SearchBar({ onSearch }){
    const [query, setQuery] = useState("");
    
    const handleKeyPress = (event) => {
        if (event.key == "Enter"){
            onSearch(query);
        }
    }


    return (
        <div className="search">
            {/* <FaSearch></FaSearch> */}
            <input 
                type="text" 
                placeholder="Search for Mountains" 
                className="searchbar"
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
            >
            </input>
        </div>
    )
}

export default SearchBar;