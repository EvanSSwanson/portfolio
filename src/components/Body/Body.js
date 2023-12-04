import './Body.css';
import background from '../../resources/vaporwave-body.png'
import Greeting from '../Greeting/Greeting'
import About from '../About/About'
import Projects from '../Projects/Projects'

const Body = () => {
  
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: '200vw',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
};

  return (
    <div className='Body' style={myStyle}>
        <Greeting/>
        <About/>
        <Projects/>
    </div>
  );
}

export default Body;