import {useState} from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import India from './India';

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const handleHomeClick = function() {
    setCurrentSection("home")
  }

  const handleAboutClick = function() {
    setCurrentSection("about")
  }  

  const handleIndiaClick = function() {
    setCurrentSection("India")
  }

  return (
    <div className="App">
      <header> 
        <h1>Royal Tours</h1>

        <div id="subheaders">
          <h2 
            id= {currentSection === "home" ? "selectedHomeHeader" : "homeHeader"}
            onClick = {handleHomeClick}
          >Home</h2>
            <h2 id= {currentSection === "about" ? "selectedAboutHeader" : "aboutHeader"}
            onClick = {handleAboutClick}
          >About</h2>
          <h2 
            id= {currentSection === "India" ? "selectedIndiaHeader" : "IndiaHeader"}
            onClick = {handleIndiaClick}  
          >India</h2>
          <h2>
            <a 
              id="YouTubeLink" 
              href="https://youtube.com/playlist?list=PLejaDxC4D0ZGySU3-h02F2zM5xQS8X8XK&si=pMc9u_YRnKqRwUb_"
              target = "_blank"
            >YouTube</a>
          </h2>
        </div>
      </header>

      {
        currentSection === "home" ?
          <Home/> :
            currentSection === "about" ?
              <About/> :
                <India/>
      }


      <footer>
        <h1>Contact Information</h1>
        <h2>Representative: Colin Pace</h2>
        <h2>Email: colinpace1987@gmail.com</h2>
        <h2>Telephone: 512-401-7615</h2>
      </footer>
    </div>
  );
}

export default App;
