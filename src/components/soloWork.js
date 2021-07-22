import React  from 'react';
import '../styles/solo.css'
//import '../app.css'

function soloWork() {

    return (

        <body class= "solo">
        <div class="card-group ">
        <div class="card solo " >
          <div class="card-body">
            <h5 class="card-title">Github Solo Work</h5>
            <p class="card-text">Some quick examples of what I worked on during my Bootcamp with Carlton University </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group">Password Generator - simple passcode generator</li>
            <li class="list-group">Weather App - Application for seeing the weather</li>
            <li class="list-group">Day Planner - Application for planning your workday</li>
          </ul>
          <div class="card-body">
            <li>
            <a href="https://phil-stew.github.io/password-gen/" class="card-link">Password Gen</a>
          </li>
          <li>
            <a href="https://phil-stew.github.io/Weather-Appi/" class="card-link">Weather App</a>
          </li>
          <li>
            <a href="https://phil-stew.github.io/Day-Planner-Ex/" class="card-link">Day Planer</a>
          </li>
          </div>
        </div>
        </div>
        </body>
    )
}

export default soloWork