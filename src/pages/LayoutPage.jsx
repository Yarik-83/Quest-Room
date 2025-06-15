
import { Outlet, useLocation } from 'react-router';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import bg from '../assets/bg/bg0.jpg'
import { useEffect } from 'react';
import { useStore } from '../store.js';
import Popup from '../components/Popup.jsx'


export default function Layout() {

    const { setGenre, setBtnActive, popupShow } = useStore()
    const location = useLocation()

    useEffect(() => {
        setGenre("Всі Ігри")
        setBtnActive(0)
    }, [location])

    return (
        <div className='layout-page' style={{ backgroundImage: `url(${bg})`}}>
            <Header />
            <Outlet />
            <Footer />
            {popupShow && <Popup />}
        </div>
    )
}