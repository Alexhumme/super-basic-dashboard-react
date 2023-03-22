import Avatar from "../common/Avatar"
import NavbarItem from "./SidebarItem"
import { useLocation } from "react-router-dom"

export default function Sidebar() {
    const location = useLocation().pathname
    const rutas = [
        {
            text: 'Home',
            to: '/admin/'
        },
        {
            text: 'Instructores',
            to: '/admin/instructores'
        },
        {
            text: 'Fichas',
            to: '/admin/fichas'
        },
        {
            text: 'Ambientes',
            to: '/admin/ambientes'
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
                            <NavbarItem 
                                to={ruta.to} 
                                key={rutas.indexOf(ruta)} 
                                active={ruta.to === location}
                                >
                                    {ruta.text}
                            </NavbarItem>
                        )
                    })

                }
            </ul>
        </aside>
    )
}