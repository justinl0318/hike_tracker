import React, { useContext } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import "./Navbar.css";
import mountains_list from "./Assets/mountainslist";
import HikeTrackerLogo from "./Assets/hike-tracker-logo-1.jpg"

function NavBar() {

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
                            
                        </Nav>

                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Account
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
