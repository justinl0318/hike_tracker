import React from "react";
import NavBar from "../Navbar";
import Axios from "axios";
import { useState, useEffect } from "react";
import "./Progress.css"
import Button from 'react-bootstrap/Button';

function Progress() {
    const [mountains_list, setMountain_list] = useState([])

	const storedUsername = localStorage.getItem('usernameGlobal')
	useEffect(() => {
		const fetchMountainData = async () => {
			try {
				const response = await Axios.get(`http://localhost:5000/users/${storedUsername}/mountains`);
				setMountain_list(response.data); //set value
			} catch (error) {
				console.error('Error fetching mountain data:', error);
			}
		}

		fetchMountainData();
	}, []); // Empty dependency, runs only once initially

    const [search, setSearch] = useState("")
    const [progress, setProgress] = useState(0);
    const filteredMountains = mountains_list.filter(mountain => mountain.name.includes(search))

    const handleCheckBoxChange = async (isChecked, mountainId) => {
        setProgress(() => isChecked ? progress + 1 : progress - 1)

        try {
            const response = await Axios.put(`http://localhost:5000/users/${storedUsername}/mountains/update/${mountainId}`, {
                checked: isChecked
            })
            console.log("Update success", response.data)
        } catch (error) {
            console.error('Error updating mountain:', error);
        }
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
    }

    // find the number of checked
    useEffect(() => {
        let newProgress = 0;
        mountains_list.map(mountain => {
            if (mountain.checked) {
                newProgress++;
            }
        });
        setProgress(newProgress);
    }, [mountains_list]) // run when value of mountains_list change

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
                                    onChange={(e) => handleCheckBoxChange(e.target.checked, mountain.id)}
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