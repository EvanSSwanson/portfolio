import './Body.css';
import Greeting from '../Greeting/Greeting'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Card from '../Card/Card'

const Body = () => {

  return (
    <div className='Body'>
        <Greeting/>
        <About/>
        <Projects/>
    </div>
  );
}

export default Body;