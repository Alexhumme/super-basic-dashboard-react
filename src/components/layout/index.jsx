import { useLocation } from "react-router-dom";
import Nabvar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export default function Layout({ children }) {
    const location = useLocation().pathname
    const navigate = useNavigate();
    const home = location === '/'

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        if (!authToken) {
            navigate('/')
        }
    }, [navigate])

    return (
        <>
            {!home && <Sidebar />}
            <div className={"body-container"+(!home ? ' spaced' : '')}>
                <Nabvar />
                <main>
                    <div className={home ? 'home-container light' : 'route-container'}>
                        {children}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}