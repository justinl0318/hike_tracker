import React, { useState, createContext, useEffect } from 'react';
import Map from './Map';
import MountainBlock from './mountainblock';
import { Route, Routes } from 'react-router-dom'
import SearchBar from './Searchbar';
import "./Homepage.css"
import NavBar from '../Navbar';

const PinpointContext = createContext();


function Homepage(){
	const [searchQuery, setSearchQuery] = useState("")
	const [pinpointQuery, setpinpointQuery] = useState("")
	const [pinpointHover, setpinpointHover] = useState("")

	const handleSearch = (query) => {
		setSearchQuery(query);
	}

	const handleClickPinpoint = (query) => {
		console.log(query);
		setpinpointQuery(query);
	}

	const handleMouseOverPinpoint = (query) => {
		console.log(query);
		setpinpointHover(query);
	}

	// if searchQuery changes, then reset pinpointQuery
	useEffect(() => {
		setpinpointQuery("");
		setpinpointHover("");
	}, [searchQuery]);

  	return (
		<>
			<NavBar></NavBar>
			<div className='page'>
				<div className='left-hand-side'>
					{/* wrap Map inside Pinpointcontext so that all children 
					can have access to handleClickPinpoint, including Pinpoint.js,
					this way, we don't need to use nested useState */}
					<PinpointContext.Provider value={{handleClickPinpoint, handleMouseOverPinpoint}}>
						<Map></Map>
					</PinpointContext.Provider>
				</div>
				<div className='right-hand-side'>
					<div className='search-bar-container'>
						<SearchBar onSearch={handleSearch}></SearchBar>
					</div>
					<div className='mountain-list'>
						<MountainBlock 
							searchQuery={searchQuery} 
							pinpointQuery={pinpointQuery} 
							pinpointHover={pinpointHover}
						>
						</MountainBlock>
					</div>
				</div>
			</div>
		</>
		
	)

}

export default Homepage;
export { PinpointContext };
