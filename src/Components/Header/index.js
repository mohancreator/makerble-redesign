import './index.css'
import { GoTriangleDown } from "react-icons/go";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FaList } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";



const Header = () => (
    <div className="header-container">
        <ul className="left-container">
            <li className='logo-container'>
                <img className='logo-m'
                    src="https://d3p03xrqe2ja84.cloudfront.net/assets/sprites/logos/makerble-mini-logo-transparent-2e543d506b626dfda97d5ae54c54d174d345de3cfc9ec3105c6124e90c018667.png"
                    alt="logo" />
            </li>
            <li className='my-app-item'>
                <a className='my-app'>My app
                    <GoTriangleDown />
                </a>
            </li>
            <li className='home-item'>
                Home
            </li>
            <li className='search-item'>
                <input className='search-input' placeholder='Search for contacts and projects' type='search' />
            </li>
        </ul>
        <ul className='right-container'>
            <a className='notify-container'>
                <span className='span-count'>
                    0
                </span>
                <img className='img'
                    src="https://d3p03xrqe2ja84.cloudfront.net/assets/bell-25be87d898a0b1f923f47c44b6a54c25c90389d1584a246bf5a89d41815ddb83.png"
                    alt='bell' />
            </a>
            <img className='img' alt='mail'
                src='https://d3p03xrqe2ja84.cloudfront.net/assets/message-fc4570557e6b3e2efca9ad03fa405aea6b75b04555b1be6ed42dd28a5223b671.png' />
            <img className='img' alt='thunder'
                src='https://d3p03xrqe2ja84.cloudfront.net/assets/lightningbolt-9255c71e12d08558f086a7089936d205621d6af6d4384d7d107cda823b105a07.png' />
            <span className='span-count'>3</span>
            <a className='profile'>
                <BsFillPersonCheckFill className='img' />
                <p>User Name</p>
            </a>
            <a className='button-anchor'>
                <button className='button-create'>
                    <FaPlus />
                    <span>Create</span>
                </button>
            </a>
            <a>
                <button className='more'>
                    <FaList />
                    <p>More</p>
                </button>
            </a>
            <a>
                < FaGift className='gift' />
            </a>
        </ul>
    </div >
)

export default Header