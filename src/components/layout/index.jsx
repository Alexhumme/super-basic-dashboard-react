import Nabvar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function Layout({children}){
    return (
        <>
        <Nabvar />
        <main>
            <Sidebar />
            <div className='route-container secondary'>
                {children}
            </div>
        </main>
        <Footer />
        </>
    )
}