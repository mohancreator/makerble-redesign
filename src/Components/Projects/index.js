import './index.css'
import { FaPlus } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";

const Projects = () => (
    <div className='card-container'>
        <div className='heading-container'>
            <h4 className='card-heading'>Projects</h4>
            <button className='button-new'>
                <FaPlus />
                <span>New Projects</span>
            </button>
        </div>
        <div className='buttons-container'>
            <button className='expand-hide'>
                Expand
                <GoTriangleDown />
            </button>
            <button className='expand-hide'>
                Hide Explainer
                <GoTriangleDown />
            </button>
        </div>
        <img className='greeting-img'
            alt='img'
            src='https://d3p03xrqe2ja84.cloudfront.net/assets/tiles/tile_project-db3557a4cc28fe9d2c7ced2c56bd35d5b553fbfa586a157dcd77ceeaad1a55b0.png' />
        <p className='p-greet'>Bring Your Vision to Life</p>
    </div>
)

export default Projects