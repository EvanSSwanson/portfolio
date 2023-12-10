import './Navbar.css'
import logo from '../../resources/monitor-logo.png'

const Navbar = () => {

  return (
    <div className='Navbar'>
        <a href='#top'>
          <img src={logo} className='logo'/>
          <div className='logo-top-layer'></div>
        </a>
        <nav className='nav-directory'>
            <a href='#About' className='page-link'>About</a>
            <a href='#Projects' className='page-link'>Projects</a>
            <div className='divider'></div>
            <a className= 'personal-link' id='personal-linkedin' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/evan-swanson-5baa80158/'>LinkedIn</a>
            <a className= 'personal-link' id='personal-github' target='_blank' rel='noopener noreferrer' href='https://github.com/EvanSSwanson'>GitHub</a>
            <p id='personal-email'>evan.sundelius@gmail.com</p>
        </nav>
    </div>
  );
}

export default Navbar