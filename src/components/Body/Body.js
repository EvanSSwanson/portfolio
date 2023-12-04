import './Body.css';
import background from '../../resources/vaporwave-body.png'
import Greeting from '../Greeting/Greeting'
import About from '../About/About'

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
    </div>
  );
}

export default Body;