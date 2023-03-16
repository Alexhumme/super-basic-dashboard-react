import Button from "../common/Button"
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Sena_Colombia_logo.svg'

export default function Navbar() {
    const navigate = useNavigate()
    const auth = sessionStorage.getItem('Auth Token')
    const handleLogout =()=>{
        console.log("logout")
        sessionStorage.removeItem('Auth Token')
        navigate("/")
    }   
    return (
        <nav className="nav primary">
            <div className="navbar">
                <i className="icon">
                    <img src={logo} alt="Logo-Sena" />
                    Horarios Sena
                </i>
                <ul className="navlist">
                </ul>
                { auth && <Button cType="light" outline action={handleLogout}>Log out</Button> }                
            </div>
        </nav>
    )
}