import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import mountains_list from "../Assets/mountainslist";
import { Link as ScrollLink } from "react-scroll"
import HikeTrackerLogo from "../Assets/hike-tracker-logo-1.jpg"
import "./Jumpbar.css"

function JumpBar() {
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

                    <ScrollLink
                        to="main" 
                        smooth={true}
                        offset={-120}
                        className="nav-link scroll-link"
                    >
                        Main
                    </ScrollLink>
                    <ScrollLink
                        to="weather" 
                        smooth={true}
                        offset={-120}
                        className="nav-link scroll-link"
                    >
                        Weather
                    </ScrollLink>
                    <ScrollLink
                        to="location" 
                        smooth={true}
                        offset={-120}
                        className="nav-link scroll-link"
                    >
                        Location
                    </ScrollLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default JumpBar;

{/* <li className="nav-item active">
    <ScrollLink
        to="weather" 
        spy={true}
        smooth={true}
        offset={-90}
        className="nav-link"
    >
        Weather
    </ScrollLink>
</li> */}
