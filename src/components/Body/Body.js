import './Body.css';
import background from '../../resources/vaporwave-body.png'

const Body = () => {
  
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: '200vw',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
};

  return (
    <div className='Body' style={myStyle}>
    </div>
  );
}

export default Body;