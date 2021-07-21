import './App.css';
import Header from "./components/header.js"
import NavBar from "./components/navBar.js"
import About from "./components/aboutMe.js"
import Project from "./components/groupWork.js"
import Contact from "./components/contactMe.js"
import Footer from "./components/footer.js"
import "./App.css"

function App() {
  return (
    <div>
      <Header>
        {/* <NavBar/> */}
      </Header>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;