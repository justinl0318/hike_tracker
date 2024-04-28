import React, { useContext } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import "./Navbar.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import HikeTrackerLogo from "./Assets/hike-tracker-logo-1.jpg"

function NavBar() {
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
            <div className="mynavbar">
                <Navbar bg="light" expand="lg" fixed="top">
                    <img src={HikeTrackerLogo} className="hike-tracker-logo" alt="logo"></img>
                    <Navbar.Brand href="/homepage">Hike Tracker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Dropdown style={{color: "black", paddingTop: "1px"}}>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Lists
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-custom">
                                {/* parentheses() means implicitly returning the expression inside*/}
                                {mountains_list.map(mountain => (
                                    <Dropdown.Item key={mountain.id} href={`/homepage/${mountain.name}`}>{mountain.name}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link href="/progress" style={{color: "black"}}>Progress</Nav.Link>
                            <Nav.Link href="/upload" style={{color: "black"}}>Upload</Nav.Link>
                            <Nav.Link href="/delete-mountain" style={{color: "black"}}>Delete</Nav.Link>
                        </Nav>

                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                {storedUsername}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-custom">
                                <Dropdown.Item href="/">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>

                    
                </Navbar>
            </div>
    );
}

export default NavBar;
