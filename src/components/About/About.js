import './About.css'
import mePic from '../../resources/me-pic.png'
import questioner from '../../resources/vaporwave-questioner.png'
import { aboutText1, aboutText2, aboutText3 } from '../../resources/aboutText'

const About = () => {

  return (
    <div className='About' id='About'>
            <div className='description-container'>
                <h3 className='description-line1'>{aboutText1}<span className='span-font'> {aboutText2}</span></h3>
                <h3 className='description-line2'>{aboutText3}</h3>
            </div>
            <div className='questioner-container'>
                <a className= 'turing-link' target='_blank' rel='noopener noreferrer' href="https://turing.edu/">
                    <img src={questioner} className='questioner'/>
                </a>
            </div>
            <div className='click-container'>
                <h3 className='click'>^^^^^^^^ go ahead, click him</h3>
            </div>
            <img src={mePic} className='me-pic'/>
    </div>
  );
}

export default About