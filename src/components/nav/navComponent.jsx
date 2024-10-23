import '../../index.css';
import './navComponent.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='Navbar'>
      
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/FAQ">FAQ</Link></li>
      <li><Link to="/Charts">Charts</Link></li>
      </ul>
      
    </div>
  );
}

export default Nav;