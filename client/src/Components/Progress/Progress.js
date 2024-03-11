import React from "react";
import NavBar from "../Navbar";
import mountains_list from "../Assets/mountainslist";
import { useState, useEffect } from "react";
import "./Progress.css"
import Button from 'react-bootstrap/Button';

function Progress() {
    const [search, setSearch] = useState("")
    const [progress, setProgress] = useState(0);
    const filteredMountains = mountains_list.filter(mountain => mountain.name.includes(search))

    const handleCheckBoxChange = (isChecked) => {
        setProgress(() => isChecked ? progress + 1 : progress - 1)
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
    }

    // find the number of checked at first render
    useEffect(() => {
        let newProgress = 0;
        mountains_list.map(mountain => {
            if (mountain.checked) {
                newProgress++;
            }
        });
        setProgress(newProgress);
    }, [])

    return (
        <div>
            <NavBar></NavBar>
            <div className="progress-container">
                <div className="progress-bar">
                    <div style={{
                        height: "100%",
                        width: `${Math.floor((progress / mountains_list.length) * 100)}%`,
                        backgroundColor: "#A1A1A1",
                        transition: "width 0.5s"
                    }}>
                        <span className="progress-percent">{`${Math.floor((progress / mountains_list.length) * 100)}%`}</span>
                    </div>
                </div>
                <form className="progress-form">
                    <input 
                        type="text" 
                        className="search-for-mountains" 
                        placeholder="search for mountains"
                        onChange={(e) => setSearch(e.target.value)}
                    >
                    </input>
                    <Button variant="primary" className="search-button" onClick={handleButtonClick}>Search</Button>
                    
                </form>
                <div className="progress-scrollable">
                    {filteredMountains.map(mountain => (
                        <div key={mountain.id} className="progress-mountain-block">
                            <div className="progress-mountain-block-name">
                                {mountain.name}
                            </div>
                            <div className="progress-mountain-block-checkbox">
                                <input 
                                    type="checkbox" 
                                    defaultChecked={mountain.checked} 
                                    onChange={(e) => handleCheckBoxChange(e.target.checked)}
                                >
                                </input>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Progress;