import IconoUsuario from "./IconoUsuario";
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/logo.svg'

export default function Navbar() {
    const navigate = useNavigate()

    const auth = sessionStorage.getItem('Auth Token')
    
    
    return (
        <nav className="nav primary">
            <div className="navbar">
                <i className="iconPage" onClick={() => navigate('/')}>
                    <img src={logo} alt="logo" />
                    Super Simple Dashboard
                </i>
                {
                    auth &&
                    <>
                        <IconoUsuario/>
                    </>
                }
            </div>
        </nav>
    )
}