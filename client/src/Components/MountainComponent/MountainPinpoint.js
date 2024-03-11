import React from "react";
import { IoIosPin } from "react-icons/io";
import "./MountainPinpoint.css"

function MountainPinpoint({ name }){
    return (
        <div className="pinpoint">
            <IoIosPin className="pinpoint-icon"></IoIosPin>
            <div className="pinpoint-name">{name}</div>
        </div>
    )
};

export default MountainPinpoint;
