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
        <div className="frame-container">
      <div className="monitor-frame">
      </div>
    </div>
    </div>
  );
}

export default Body;