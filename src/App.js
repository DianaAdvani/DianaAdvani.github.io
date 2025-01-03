import {Homepage} from "./Hompage";
import { ProjectHomepage } from './ProjectHomepage';
import {About} from "./About";
import {Art} from "./Art";
import { useState } from 'react';

function App() {
  const [page, setPage] = useState("home");
  return (
    <>
        <header className="header">
            <h1>Diana Advani</h1>
            <div className="header-descriptors">
                <p>developer</p>
                <p>designer</p>
                <p>creative</p>
            </div>
        </header>

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
        {/* <footer>
          <p> Contact me: dianacadvani[at]gmail.com</p>
        </footer> */}

    </>
  );
}

export default App;
