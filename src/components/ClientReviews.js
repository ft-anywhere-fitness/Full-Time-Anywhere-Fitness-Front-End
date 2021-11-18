import React from "react";
import kirby from "../assets/kirby.jpeg";
import thor from "../assets/thor.jpg";
import blackwidow from "../assets/blackwidow.jpg";

export default function ClientReviews() {
    
    return(
        <div className='scontainer'>
        <div className='stories'>
            <div className='client'>
                <h3>Thor</h3>
                <img className='thor' src={thor} alt="thor" />
                <div className='text'>
                    <p>Before Anywhere Fitness I couldn't even lift up my hammer, but after 3 months of the program I can finally lift up my hammer!</p>
                </div>
            </div>

            <div className='client'>
                <h3>Kirby</h3>
                <img className='kirby' src={kirby} alt="buff kirby" />
                <div className='text'>
                    <p>Since I have a big appetite I was very round but after Anywhere Fitness i now finally have the strength to fight King Dedede</p>
                </div> 
            </div>

            <div className='client'>
                <h3>Black Widow</h3>
                <img className='widow' src={blackwidow} alt="black widow" />
                <div className='text'>
                    <p>After using Anywhere Fitness I became an amazing assassin/spy and was finally able to join the Avengers and save the world!</p>
                </div>
            </div>
        </div>
        </div>
    )
}


