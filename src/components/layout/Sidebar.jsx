import Avatar from "../common/Avatar"
import SidebarItem from "./SidebarItem"
import { useLocation } from "react-router-dom"

export default function Sidebar() {
    const location = useLocation().pathname
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
        <aside className="sidebar light">
            <div className="user">
                <Avatar></Avatar>
                <span className="nombre">nombre</span>
                <span className="cargo">cargo</span>
            </div>
            <ul>
                {
                    rutas.map(ruta => {
                        return (
                            <SidebarItem
                                to={ruta.to} 
                                key={rutas.indexOf(ruta)} 
                                active={ruta.to === location}
                                >
                                    {ruta.text}
                            </SidebarItem>
                        )
                    })

                }
            </ul>
        </aside>
    )
}