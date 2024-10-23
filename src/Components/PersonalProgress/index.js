import './index.css'
import { GoTriangleDown } from "react-icons/go";

const PersonalProgress = () => (
    <div className='card-container'>
        <div className='heading-container'>
            <h4 className='card-heading'>Personal Progress</h4>
            <span className='span-head'>Go to board</span>
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
            src='https://d3p03xrqe2ja84.cloudfront.net/assets/tiles/tile_progress_board-fab510e4402b893a7784b208f1f845ee35290aa341b2de1d12a4c866a37eaf9c.png' />
        <p className='p-greet'>Make every result understandable</p>
    </div>
)

export default PersonalProgress