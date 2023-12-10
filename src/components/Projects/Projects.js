import './Projects.css'
import projectData from '../../resources/projectData'
import Card from '../Card/Card';

const Projects = () => {

  return (
    <div className='Projects' id='Projects'>
        <div className='projects-title-container'>
            <h1 className='projects-title'>Projects</h1>
        </div>
        <div className='card-container'>
            {projectData.map((datum) => {
                return (
                    <Card datum={datum}/>
                )
            })}
        </div>
    </div>
  );
}

export default Projects