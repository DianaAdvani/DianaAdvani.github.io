import logo from './logo.svg';
import './App.css';
import {Homepage} from "./Hompage";
import { ProjectHomepage } from './ProjectHomepage';
import {About} from "./About";
import {Art} from "./Art";
import { useState } from 'react';

function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {page == "home" && <Homepage clickHandler={setPage}/>}
        {page == "projects" && <ProjectHomepage clickHandler={setPage}/>}
        {page == "about" && <About clickHandler={setPage}/>}
        {page == "art" && <Art clickHandler={setPage}/>}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
