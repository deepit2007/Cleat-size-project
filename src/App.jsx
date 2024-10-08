import './index.css';
import Nav from './components/nav/navComponent';
import Home from './components/homeComponent';
const App = () => {
  return (
    <div className='text-5xl'>
      <Nav/>
      App
      <Home/>
    </div>
    
  );
}

export default App