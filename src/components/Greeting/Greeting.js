import './Greeting.css';

const Greeting = () => {

  return (
    <div className='Greeting'>
            <h1 className='hello'>Hello. <span></span></h1>
            <div className='animated-text-container'>
                <div class="animated-text">I'm <span></span></div>  
            </div>
    </div>
  );
}

export default Greeting;