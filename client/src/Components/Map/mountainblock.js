import React, { useEffect } from "react";
import "./mountainblock.css"; 
import mountains_list from "../Assets/mountainslist";
import { Link } from "react-router-dom";

// in react, you have to import the photo first so that u can use it

function MountainBlock({ searchQuery, pinpointQuery, pinpointHover }) {
    console.log(searchQuery, pinpointQuery)

    /* if pinpointQuery is not empty, render pinpointquery first */
    /* then if searchQuery is not empty, render searchQuery */
    /* if both is empty, then render normally */
    let sortedMountains;
    if (pinpointQuery) {
        if (searchQuery) {
            // get the pinpoint mountain first
            const pinpointMountain = mountains_list.filter(mountain => 
                mountain.name.includes(pinpointQuery))

            // get the searched Mountains from rest of Mountains
            const restofMountains = mountains_list.filter(mountain =>
                !mountain.name.includes(pinpointQuery))
            const filteredMountains = restofMountains.filter(mountain =>
                mountain.name.includes(searchQuery))

            const restofrestofMountains = restofMountains.filter(mountain =>
                !mountain.name.includes(searchQuery))
            
            // concat all mountains
            sortedMountains = [...pinpointMountain, ...filteredMountains, ...restofrestofMountains];
        }

        // if search query is empty, then just return pinpointMountain
        else{
            const pinpointMountain = mountains_list.filter(mountain =>
                mountain.name.includes(pinpointQuery)
            );
            const restofMountains = mountains_list.filter(mountain => 
                !mountain.name.includes(pinpointQuery)
            );
            /* concat the filtered array with the rest of the array */
            sortedMountains = [...pinpointMountain, ...restofMountains];
        }
    }

    else if (searchQuery) {
        const filteredMountains = mountains_list.filter(mountain =>
            mountain.name.includes(searchQuery)
        );
        const restofMountains = mountains_list.filter(mountain => 
            !mountain.name.includes(searchQuery)
        );
        /* concat the filtered array with the rest of the array */
        sortedMountains = [...filteredMountains, ...restofMountains];
    }
    else {
        sortedMountains = mountains_list;
    }

    return (
        <div>
            {sortedMountains.map(mountain => (
                // if the mouse is hovering over a pinpoint, add
                // a className called pinpoint-hover to the block
                // corresponding to the pinpoint
                <div className={`card mountain-block ${pinpointHover === mountain.name ? 'pinpoint-hover' : ''}`} key={mountain.id}>
                    <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                        {/* import photo first */}
                        <img src={require(`../Assets/mountains/${mountain.id}.jpg`)} className="img-fluid mountain-image"/>                        
                        <a href="#!">
                        <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15);"}}></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{mountain.name}</h5>
                        <p>
                            高度: {mountain.altitude} <br/>
                            經度: {mountain.coordinates.lat} 緯度: {mountain.coordinates.lng}
                        </p>
                        <Link to={"/homepage/" + mountain.name} className="btn btn-outline-info btn-sm btn-block">
                             See More
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MountainBlock;
