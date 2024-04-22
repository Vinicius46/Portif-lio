import './App.css';
import Projects from './components/sections/Projects';
import { Presentation } from './components/sections/Presentation';
import Skills from './components/sections/Skills';
import Footer from './components/sections/Footer';
import { Navbar } from './components/sections/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
