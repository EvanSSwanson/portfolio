import './Navbar.css';
import logo from '../../resources/monitor-logo.png'

const Navbar = () => {

  return (
    <div className='Navbar'>
        <img src={logo} className='logo'/>
        <div className='logo-top-layer'></div>
        <nav className='nav-directory'>
            <a href='#about'>About</a>
            <a href='#about'>Projects</a>
        </nav>
    </div>
  );
}

export default Navbar;