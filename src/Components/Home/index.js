import './index.css'
import Header from '../Header'
import Projects from '../Projects'
import Albums from '../Albums'
import Organisation from '../Organisation'
import ProgressBoard from '../ProgressBoard'
import PersonalProgress from '../PersonalProgress'
import Tasks from '../Task'
import InputPost from '../InputPost'

const Home = () => {
    return (
        <div className='whole-container'>
            <Header />
            <div className='home-container'>
                <div className='left-containers'>
                    <Projects />
                    <Albums />
                    <Organisation />
                </div>
                <div className='center-container'>
                    <InputPost />
                </div>
                <div className='home-right-container'>
                    <ProgressBoard />
                    <PersonalProgress />
                    <Tasks />
                </div>
            </div>
            <div className='container-fluid'>
                <div className='line-flex'>
                    <div className='sprites-line'>
                        <h1 className='hM'>M</h1>
                    </div>
                </div>
                <div className='footers-outer-container'>
                    <div className='footer-container'>
                        <div className='footer-inside-container1'>
                            <img src='https://d3p03xrqe2ja84.cloudfront.net/assets/sprites/logos/makerble-small-logo-b3ad49d24c0988fc1f040e3abf19b383b897c2b49220534e1782682d26cf208e.png'
                                className='footer-logo'
                                alt='makerable-img' />
                            <a className='anchor'>About us</a>
                            <a className='anchor'>Terms and conditions</a>
                            <a className='anchor'>Privacy and policy</a>
                        </div>
                        <div className='footer-inside-container2'>
                            <h4 className='footer-heading'>ORGANISATIONS</h4>
                            <a className='anchor'>Discover the marketprice</a>
                            <a className='anchor'>Create organisation account</a>
                        </div>
                        <div className='footer-inside-container3'>
                            <h4 className='footer-heading'>YOUR ACCOUNT</h4>
                            <a className='anchor'>library</a>
                            <a className='anchor'>Profile</a>
                            <a className='anchor'>Projects</a>
                            <a className='anchor'>Help</a>
                        </div>
                        <div className='footer-inside-container4'>
                            <h4 className='footer-heading'>EXPLORE</h4>
                            <a className='anchor'>Metrix</a>
                            <a className='anchor'>Network</a>
                            <a className='anchor'>Stratiges</a>
                            <a className='anchor'>Projects</a>
                            <a className='anchor'>Studies</a>
                            <a className='anchor'>Surveys</a>
                            <a className='anchor'>Ideas</a>
                            <a className='anchor'>Voucher</a>
                        </div>
                        <div className='inside-footer-container5'>
                            <h4 className='footer-heading'>FOLLOW THE MAKERBLE STORY</h4>
                            <div>
                                <img src='https://d3p03xrqe2ja84.cloudfront.net/assets/Linkedin_circle-d456a4787224a5d472637ea5b7d030e481cd0e56e660c96c001dfc739d148df9.png'
                                    alt='linkedin'
                                    className='image' />
                                <img src='https://d3p03xrqe2ja84.cloudfront.net/assets/sprites/social/footer/footer-youtube-a0e116c8854ef7296345fc05c705d7efbe98d88dcf383d38a61e6405ee2ee2bd.png'
                                    alt='youtube'
                                    className='image' />
                                <img src='https://d3p03xrqe2ja84.cloudfront.net/assets/sprites/social/footer/footer-instagram-c3047871ccba63643bb5f5e216bdf4a5a9a17a5ff3f400f09ae49bc83d5c5ac1.png'
                                    alt='instagram'
                                    className='image' />
                                <img src='https://d3p03xrqe2ja84.cloudfront.net/assets/sprites/social/footer/footer-twitter-e5575bfa4d2d7a9cce598527142863553fb9e3a64a78af10d62fadbd938ca99d.png'
                                    alt='twitter'
                                    className='image' />
                                <img src='https://d3p03xrqe2ja84.cloudfront.net/assets/sprites/social/footer/footer-facebook-dbc4648eb7a0b22039eb9ff0c42446501c00886d60f8dd60060a37adfd36d5fc.png'
                                    alt='facebook'
                                    className='image' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home