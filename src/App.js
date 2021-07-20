import React from 'react';
import { Fade } from "react-awesome-reveal";

import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Description from './components/Description';
import Projects from './components/Projects';
import Where from './components/Where';

class App extends React.Component {
  render = () => {
    return (
      <>  
        <NavBar />
        <main>
          <Fade delay={500} triggerOnce>
            <Welcome />
          </Fade>
          <Fade delay={500} triggerOnce>
            <Description />
          </Fade>
          <Fade delay={500} triggerOnce>
            <Projects />
          </Fade>
          <Fade delay={500} triggerOnce>
            <Where />
          </Fade>
        </main>
      </>
    )
  }
}

export default App;
