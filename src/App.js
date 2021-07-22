// import logo from './logo.svg';
// import './App.css';
// import About from "./pages/aboutMe"
// import SoloWork from "./pages/soloWork"
// import GroupWork from "./pages/groupWork"
// import User from "./pages/userprofiles"
// //import GroupWork from "./components/groupWork"
// import Contact from './pages/contactMe';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

  
//         <About />
//         <SoloWork/>
//         <GroupWork />
//         <User />
//       </header>
//       <Contact />
//     </div>      
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages';
import About from './pages/aboutMe';
import SoloWork from './pages/soloWork';
import GroupWork from './pages/groupWork';
import UserProfile from './pages/userprofiles';
import Contact from './pages/contactMe';
import Footer from './components/Footer';


function App() {
return (
	<Router>
	<Navbar />
	<Footer />
	<Switch>
    {/* <Route path='/' exact component={Home} /> */}
		<Route path='/aboutMe' component={About} />
		<Route path='/soloWork' component={SoloWork} />
		<Route path='/group' component={GroupWork} />
		<Route path='/repos' component={UserProfile} />
        <Route path='/contact' component={Contact} />

	</Switch>
	</Router>
);
}

export default App;

