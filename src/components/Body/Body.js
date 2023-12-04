import './Body.css';
import background from '../../resources/vaporwave-body.png'
import Greeting from '../Greeting/Greeting'

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
    </div>
  );
}

export default Body;