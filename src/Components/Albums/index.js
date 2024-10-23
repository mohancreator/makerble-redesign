import './index.css'
import { FaPlus } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";

const Albums = () => (
    <div className='card-container'>
        <div className='heading-container'>
            <h4 className='card-heading'>Albums</h4>
            <button className='button-new'>
                <FaPlus />
                <span>New Albums</span>
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
            src='https://d3p03xrqe2ja84.cloudfront.net/assets/tiles/tile_bundle-e0db9b7f5608167c710c4ee4716b451d80fab0717335d3293a0619665fbd35e9.png' />
        <p className='p-greet'>Meet every reporting requirement</p>
    </div>
)

export default Albums