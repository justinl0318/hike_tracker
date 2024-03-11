import React, { useContext } from "react";
import { IoIosPin } from "react-icons/io";
import "./pinpoint.css"
import { PinpointContext } from "./Homepage";

function Pinpoint({ name }){
    const {handleClickPinpoint, handleMouseOverPinpoint} = useContext(PinpointContext);

    const handleClick = () => {
        handleClickPinpoint(name);
    };

    const handleMouseOver = () => {
        handleMouseOverPinpoint(name)
    }

    return (
        <div className="pinpoint" onClick={handleClick} onMouseOver={handleMouseOver}>
            <IoIosPin className="pinpoint-icon"></IoIosPin>
            <div className="pinpoint-name">{name}</div>
        </div>
    )
};

export default Pinpoint;
