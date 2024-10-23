import './index.css'

import { GoTriangleDown } from "react-icons/go";

const Organisation = () => (
    <div className='card-container'>
        <div className='heading-containers'>
            <h4 className='card-headings'>Organisation</h4>
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
            src='https://d3p03xrqe2ja84.cloudfront.net/assets/tiles/tile_charity-e122c5196563c7233e0ebfdbc407a34d63ccc164fe93e6d4bf1affa370480a18.png' />
        <p className='p-greet'>If it's imaginable, it's possible</p>
    </div>
)

export default Organisation