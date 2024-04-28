import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Map/Homepage';
import NoPage from './Components/NoPage';
import Mountain from './Components/MountainComponent/Mountain';
import NavBar from './Components/Navbar';
import Progress from "./Components/Progress/Progress"
import Login from "./Components/Form/Login"
import Register from './Components/Form/Register';
import Upload from './Components/Upload/Upload';
import DeleteUser from './Components/Form/DeleteUser';
import DeleteMountain from './Components/Upload/DeleteMountain';

function App(){
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


	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />}>
				</Route>
				<Route path='/register' element={<Register />}>
				</Route>
				<Route path='/delete-user' element={<DeleteUser />}>
				</Route>
				<Route path="/homepage" element={<Homepage />}> 
				</Route>

				{/* create a list of routes of mountain */}
				{mountains_list.map(mountain => (
					<Route path={"/homepage/" + mountain.name} element={<Mountain mountain={mountain}/>} />
				))}

				<Route path="/upload" element={<Upload />} />
				<Route path="/progress" element={<Progress />} />
				<Route path="/delete-mountain" element={<DeleteMountain />} />
				<Route path="*" element={<NoPage />}>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;

