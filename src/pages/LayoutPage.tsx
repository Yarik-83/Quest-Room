
import { Outlet, useLocation } from 'react-router';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.js';
import bg from '../assets/bg/bg0.jpg'
import { useEffect } from 'react';
import { useStore } from '../store.js';
import Popup from '../components/Popup.jsx'
import InstaIcon from '../components/icons/InstaIcon.jsx';
import TwitterIcon from '../components/icons/TwitterIcon.jsx';
import YoutubeIcon from '../components/icons/YoutubeIcon.jsx';


export default function Layout(): React.ReactElement {

    const { setGenre, setBtnActive, popupShow } = useStore()
    const location = useLocation()


    useEffect(() => {
        setGenre("Всі Ігри")
        setBtnActive(0)
    }, [location])

    return (
        <div className='layout-page' style={{ backgroundImage: `url(${bg})` }}>
            <Header />
            <Outlet />
            <Footer >
                <InstaIcon color='#535353' />
                <TwitterIcon color='#535353' />
                <YoutubeIcon color='#535353' />
            </Footer>
            {popupShow && <Popup />}
        </div>
    )
}