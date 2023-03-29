import Button from '../../common/Button';
import Avatar from '../../common/Avatar';
import MenuUsuarioItem from './MenuUsuarioItem';
import { useNavigate } from "react-router-dom";

export default function MenuUsuario({ hidden }) {
    const navigate = useNavigate()
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token')
        navigate("/")
    }
    const rutas = [
        {
            text: 'Cuenta',
            to: '/admin/tools/miCuenta'
        },
        {
            text: 'Notificaciones',
            to: false
        },
        {
            text: 'Usuarios',
            to: false
        },
    ]
    return (
        <div className="userMenu" style={{
            visibility: hidden ? 'hidden' : 'inherit'
        }}>
            <Avatar></Avatar>
            <span className="nombre">nombre</span>
            <span className="cargo">cargo</span>
            <ul className="userMenulist">
                {
                    rutas.map(ruta => {
                        return (
                            <MenuUsuarioItem
                                to={ruta.to}
                                key={rutas.indexOf(ruta)}
                                toolTip={ruta.toolTip}
                            >
                                {ruta.text}
                            </MenuUsuarioItem>
                        )
                    })

                }
                <li>
                    <Button cType='light' block action={handleLogout}>Log Out</Button>
                </li>
            </ul>
        </div>
    )
}