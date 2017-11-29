import React from 'react';
import Cover from './components/Cover';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Cover/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    );
  }
}

export default App;
