import Avatar from '../../common/Avatar';
import MenuComponent from '../../common/MenuComponent';
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
            text: 'Usuarios',
            to: '/admin/tools/Usuarios'
        },
        {
            text: 'Notificaciones',
            to: false
        },
        {
            text: 'Cerrar sesion',
            cType: 'light',
            action: handleLogout
        }
    ]
    return (
        <div className="userMenu" style={{
            visibility: hidden ? 'hidden' : 'inherit'
        }}>
            <Avatar></Avatar>
            <span className="nombre">nombre</span>
            <span className="cargo">cargo</span>
            <MenuComponent data={rutas}/>
        </div>
    )
}