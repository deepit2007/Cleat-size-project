import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Charts from './pages/Charts';
import Nav from './components/nav/navComponent';
import Question1 from './pages/appPages/Question1'
import Question2 from './pages/appPages/Question2'
import Question3 from './pages/appPages/Question3'
import Question4 from './pages/appPages/Question4'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Charts" element={<Charts />} />
        <Route path="/Question1" element={<Question1 />} />
        <Route path="/Question2" element={<Question2 />} />
        <Route path="/Question3" element={<Question3 />} />
        <Route path="/Question4" element={<Question4 />} />
      
      </Routes>
    </BrowserRouter>
  );
}
 export default App;