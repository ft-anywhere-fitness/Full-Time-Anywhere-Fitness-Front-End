import React from "react";
import kirby from "../assets/kirby.jpeg";
import thor from "../assets/thor.jpg";
import blackwidow from "../assets/blackwidow.jpg";

export default function ClientReviews() {

    
    return(
        <div className='stories'>
            <div>
            <img src={thor} alt="buff kirby" />
                <h3>Thor</h3>
                <p>Before Anywhere Fitness I couldn't even lift up my hammer, but after 3 months of the program I can finally lift up my hammer!  </p>
            </div>

            <div className='kirby'>
                <img src={kirby} alt="buff kirby" />
                <h3>Kirby</h3>
                <p>Since I have a big appetite I was very round but after Anywhere Fitness i now finally have the strength to fight King Dedede </p>  
            </div>

            <div>
            <img src={blackwidow} alt="buff kirby" />
                <h3>Black Widow</h3>
                <p>After using Anywhere Fitness I became an amazing assassin/spy</p>
            </div>
        </div>
    )
}
