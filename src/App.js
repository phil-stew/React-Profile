import logo from './logo.svg';
import './App.css';
import About from "./components/aboutMe.js"
import Header from "./components/header.js"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       
        <About/>
        <Header/>
      </header>
    </div>
  );
}

export default App;
