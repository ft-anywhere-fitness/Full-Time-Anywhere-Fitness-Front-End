import React from "react";
import theRockWithquotes from "../assets/theRockWithquotes.jpg";
import abs2 from "../assets/abs2.jpg"
import squats from "../assets/squats.jpg"
import legs from "../assets/legs.jpg"


export default function Landing() {

    return(

        <div className = "quickLooks">
            <div className = "top-sect">
                <img src = {theRockWithquotes} alt = "The Rock"/>
            </div>

            <div className = "first sect">
                <div className = "img">
                    <img src = {squats} alt = "Person Squatting"/>
                </div>
                <div className = "paragraph">
                    <h2>Monster Strength</h2>
                    <p>Here at Anywhere Fitness you can build superhuman strength and if you lift here long enough you can even lift car's!</p>
                </div>
            </div>

            <div className = "second-sect">
                <div className = "paragraph">
                    <h2>Godlike Physique</h2>
                    <p>Work out at Anywhere Fitness to attain a physique even the god's would envy! Who doesn't love post workout selfies? With our top of the line mirrors the perfect selfy is one click away.</p>
                </div>
                <div className = "img">
                    <img src = {abs2} alt = "Person Posing"/>
                </div>
            </div>

            <div className = "third sect">
                <div className = "img">
                    <img src = {legs} alt = "Person using the leg curl machine."/>
                </div>
                <div className = "paragraph">
                    <h2>Equipment</h2>
                    <p> Access to state of the art gym equipment to sculpt your body into a masterpiece comparable to that of Arnold Schwarzenegger!</p>
                </div>
            </div>
        </div>
    )
}