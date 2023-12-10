import './Card.css'
import tempestPic from '../../resources/tempest.png'
import bibliothecaPic from '../../resources/bibliotheca.png'
import triviaPic from '../../resources/trivia.png'
import hangmanPic from '../../resources/hangman.png'
import tempestGif from '../../resources/tempest.gif'
import bibliothecaGif from '../../resources/bibliotheca.gif'
import triviaGif from '../../resources/trivia.gif'
import hangmanGif from '../../resources/hangman.gif'

const Card = ({datum}) => {
  const pics = [tempestPic, bibliothecaPic, triviaPic, hangmanPic]
  const gifs = [tempestGif, bibliothecaGif, triviaGif, hangmanGif]
//title, description, image, gif, link, github, technologies
  return (
    <div className='Card'>
      <div className='card-block'>
        <h2 className='card-title'>{datum.title}</h2>
        <img src={pics[datum.order]} className='card-image'/>
        <img src={gifs[datum.order]} className='card-gif'/>
        <div className='card-textbox'>
          <h3 className='card-technologies'>{datum.technologies}</h3>
          <p className='card-description'>{datum.description}</p>
        </div>
      </div>
      <div className='card-link-section'>
      <a className= 'card-link' id='card-site' target='_blank' rel='noopener noreferrer' href={datum.link}>Visit</a>
      <a className= 'card-link' id='card-github' target='_blank' rel='noopener noreferrer' href={datum.github}>GitHub</a>
      </div>
    </div>
  );
}

export default Card