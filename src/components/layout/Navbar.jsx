import Button from "../common/Button"
import NavbarItem from "./NavbarItem";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Sena_Colombia_logo.svg'

export default function Navbar() {
    const navigate = useNavigate()
    const auth = sessionStorage.getItem('Auth Token')
    const rutas = [
        {
            text: 'Principal',
            toolTip: 'Panel de control',
            to: '/admin/'
        },
        {
            text: 'Instructores',
            toolTip: 'Administrar instructores',
            to: '/admin/administracion/instructores'
        },
        {
            text: 'Fichas',
            toolTip: 'Administrar fichas',
            to: '/admin/administracion/fichas'
        },
        {
            text: 'Ambientes',
            toolTip: 'Administrar ambientes',
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
                <i className="iconPage" onClick={() => navigate('/')}>
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
                                            toolTip = {ruta.toolTip}
                                        >
                                            {ruta.text}
                                        </NavbarItem>
                                    )
                                })

                            }
                        </ul>
                        <Button cType="light" outline action={handleLogout} toolTip='Cerrar sesion'>Log out</Button>
                    </>
                }

            </div>
        </nav>
    )
}