import './index.css'
import { GoTriangleDown } from "react-icons/go";

const InputPost = () => (
    <div>
        <div className='build-story-box'>
            <input className='input-post' type='text' placeholder='Username share some progress' />
            <button className='post'>Post</button>
        </div>
        <div className='story-filter'>
            <button className='btn-story'>
                <span>Story Filter</span>
                <GoTriangleDown />
            </button>
        </div>
        <div className='feed-container'>
            <h4 className='heading-feed'>NEWSFEED</h4>
        </div>
    </div>
)

export default InputPost