import './Card.css'

const Card = ({datum}) => {
//title, description, image, gif, link, github, technologies
  return (
    <div className='Card'>
        <h2 className='card-title'>{datum.title}</h2>
    </div>
  );
}

export default Card