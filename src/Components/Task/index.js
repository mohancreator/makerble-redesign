import './index.css'
import { GoTriangleDown } from "react-icons/go";

const Tasks = () => (
    <div className='card-container-task'>
        <div className='heading-container'>
            <h4 className='card-heading'>Tasks</h4>
        </div>
        <div className='buttons-container'>
            <button className='expand-hide'>
                Expand
                <GoTriangleDown />
            </button>
        </div>
    </div>
)

export default Tasks