import React from 'react';
import '../styles/user.css'
//import '../app.css'

function User() {

return (

<body class="user">
<div class="card-group">
<div class="card user" >
<div class="card-body ">
<h5 class="card-title">Github Profile</h5>
<p class="card-text">A link to my Github profile </p>
</div>
<ul class="list-group list-group-flush">

<li class="list-group">Github Acct - You can have a look at my Github Account using the link below.</li>
<li class="list-group">Github Gist - Section on github called gist similar to a read only page. </li>
</ul>
<ul class="card-body">
<li>
<a href="https://github.com/phil-stew" class="card-link">Github Acct</a>
</li>
<li>
<a href="https://gist.github.com/phil-stew" class="card-link">Github Gist</a>
</li>
</ul>
</div>


<div class="card user" >

<div class="card-body">
<h5 class="card-title">Heroku</h5>
<p class="card-text">My heroku Account </p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group">Heroku -  here is a link to my heroku account</li>
<li class="list-group">Revenue Tracker - Application for tracker revenue simulated through an e-com store</li>

</ul>
<ul class="card-body">
<li>
<a href="https://dashboard.heroku.com/apps" class="card-link">Heroku</a>
</li>
<li>
<a href="https://budgettk.herokuapp.com/" class="card-link">Revenue Tracker</a>
</li>
</ul>
</div>
</div>
</body>
)
}

export default User