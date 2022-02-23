import { Link } from 'react-router-dom';
import bscLogo from '../assets/logo-bscscan.svg';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/">
          <img src={bscLogo} alt="bscScan" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
