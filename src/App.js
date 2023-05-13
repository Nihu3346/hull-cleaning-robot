import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Particle from './Components/Particle/Particle';
import Slideshowtext from './Components/Slideshow/Slideshowtext';

function App() {
  return (
    <div className="App">
      <Particle />
      <Navbar />
      <Slideshowtext />
    </div>
  );
}

export default App;
