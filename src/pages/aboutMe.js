import React  from 'react';
import '../styles/aboutme.css'
import Phil from "../img/phil.jpg"
//import '../app.css'

function AboutMe() {
    //const info = "#"
    return (
        <div className="about-me">
            <img src={Phil} alt='phillip stewart'  />
            <div className="about-me-info">
                <h1> About me Phillip Stewart </h1>
                <h2> Some to be life insurance agent</h2>
                <h3> Worked full time for a supply chain company</h3>

                <p> I am middle age adult born in Jamaica, However i migrated to canada at an early age.
                    Grew up in the Greater Tronto Area,(GTA) Brampton to be exact finshed high school,
                    Along with some psot secondary</p>


            </div>
        </div>
    )
}











export default AboutMe;