import Button from "../common/Button"
import NavbarItem from "./NavbarItem";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Sena_Colombia_logo.svg'

export default function Navbar() {
    const navigate = useNavigate()
    const auth = sessionStorage.getItem('Auth Token')
    const rutas = [
        {
            text: 'Home',
            to: '/admin/'
        },
        {
            text: 'Instructores',
            to: '/admin/administracion/instructores'
        },
        {
            text: 'Fichas',
            to: '/admin/administracion/fichas'
        },
        {
            text: 'Ambientes',
            to: '/admin/administracion/ambientes'
        },
    ]
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token')
        navigate("/")
    }
    return (
        <nav className="nav primary">
            <div className="navbar">
                <i className="icon" onClick={() => navigate('/')}>
                    <img src={logo} alt="Logo-Sena" />
                    Horarios Sena
                </i>
                {
                    auth &&
                    <>
                        <ul className="navlist">
                            {
                                rutas.map(ruta => {
                                    return (
                                        <NavbarItem
                                            to={ruta.to}
                                            key={rutas.indexOf(ruta)}
                                        >
                                            {ruta.text}
                                        </NavbarItem>
                                    )
                                })

                            }
                        </ul>
                        <Button cType="light" outline action={handleLogout}>Log out</Button>
                    </>
                }

            </div>
        </nav>
    )
}