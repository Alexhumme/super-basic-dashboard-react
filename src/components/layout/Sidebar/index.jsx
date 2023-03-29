import SidebarItem from "./SidebarItem"
import { useLocation } from "react-router-dom"

export default function Sidebar() {
    const location = useLocation().pathname
    const rutas = [
        {
            text: 'Panel de control',
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
        {
            text: 'Competencias'
        }
    ]
    return (
        <aside className="sidebar light">
            <div>
                Administracion
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