import React from 'react';
import '../styles/solo.css'
//import '../app.css'

function groupWork() {

    return (
        <body class= "solo">
        <div class="card-group ">
            <div class="card solo">
                <div class="card-body">
                    <h5 class="card-title">Github Group Work</h5>
                    <p class="card-text">Some quick examples of my Group at the Bootcamp with Carlton University </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group">Sports Reel - First group projest we made a app that showed NBA stats for players and teams</li>
                    <li class="list-group">Revenue Tracker - Application for tracker revenue simulated through an e-com store</li>
                </ul>
                <ul class="card-body">
                    <li>
                        <a href="https://phil-stew.github.io/Sports-Reel/" class="card-link">Sports Reel</a>
                    </li>
                    <li>
                        <a href="https://business-revenue-tracker.herokuapp.com/" class="card-link">Revenue Tracker</a>
                    </li>
                </ul>
            </div>
        </div>
        </body>




    )
}

export default groupWork