import { useLocation } from "react-router-dom";
import Nabvar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export default function Layout({ children }) {
    const location = useLocation().pathname
    const navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        if (!authToken) {
            navigate('/')
        }
    }, [navigate])

    return (
        <>
            <Nabvar />
            {
                location !== '/'
                    ?
                    <main>
                        <Sidebar />
                        <div className='route-container primary'>
                            {children}
                        </div>
                    </main>
                    :
                    <main>
                        <div className='home-container light'>
                            {children}
                        </div>
                    </main>

            }
            <Footer />
        </>
    )
}