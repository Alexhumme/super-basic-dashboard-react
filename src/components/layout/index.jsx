import Nabvar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function Layout({children}){
    return (
        <>
        <Nabvar />
        <Sidebar />
        <main>{children}</main>
        <Footer />
        </>
    )
}