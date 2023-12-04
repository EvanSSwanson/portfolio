import './Body.css';
import background from '../../resources/vaporwave-body.png'
import monitor from '../../resources/vaporwave-monitor.png'

const Body = () => {
  
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: '200vw',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
};

  return (
    <div className='Body' style={myStyle}>
        {/* <div className='welcome-section'>
            <img src={monitor} className='monitor'></img>
            <div className='inside-monitor'>
                <h1 className='hello'>hello.</h1>
                <h1 className='i-am'>i'm evan.</h1>
            </div>            
            <h2 className='i-create'>i create things.</h2>
        </div> */}
    </div>
  );
}

export default Body;