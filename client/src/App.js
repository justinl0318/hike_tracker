import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Map/Homepage';
import NoPage from './Components/NoPage';
import Mountain from './Components/MountainComponent/Mountain';
import mountains_list from './Components/Assets/mountainslist';
import NavBar from './Components/Navbar';
import Progress from "./Components/Progress/Progress"
import Login from "./Components/Form/Login"
import Register from './Components/Form/Register';

function App(){
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />}>
				</Route>
				<Route path='/register' element={<Register />}>
				</Route>
				<Route path="/homepage" element={<Homepage />}> 
				</Route>

				{/* create a list of routes of mountain */}
				{mountains_list.map(mountain => (
					<Route path={"/homepage/" + mountain.name} element={<Mountain mountain={mountain}/>} />
				))}

				<Route path="/progress" element={<Progress />} />
				<Route path="*" element={<NoPage />}>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;

