import logo from './logo.svg';
import './App.css';
import About from "./components/aboutMe"
import SoloWork from "./components/soloWork"
import GroupWork from "./components/groupWork"
import User from "./components/userprofiles"
//import GroupWork from "./components/groupWork"
import Contact from './components/contactMe';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

  
        <About />
        <SoloWork/>
        <GroupWork />
        <User />
      </header>
      <Contact />
    </div>      
  );
}

export default App;
