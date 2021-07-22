import logo from './logo.svg';
import './App.css';
import About from "./components/aboutMe.js"
import SoloWork from "./components/soloWork"
import GroupWork from "./components/groupWork.js"
import Contact from './components/contactMe';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

  
        <About />
        <SoloWork/>
        <GroupWork />
      </header>
      <Contact />
    </div>      
  );
}

export default App;
