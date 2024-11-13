import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='Qbar'>
      
      <ul>
      <li><Link to="/Question1">1</Link></li>
      <li><Link to="/Question2">2</Link></li>
      <li><Link to="/Question3">3</Link></li>
      <li><Link to="/Question4">4</Link></li>
      <li><Link to="/Question5">5</Link></li>
      </ul>
      
    </div>
  );
}

export default Nav;