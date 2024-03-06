import MenuComponent from "../../common/MenuComponent"

const rutas = [
    {
        text: 'Dashboard',
        to: '/admin/'
    },
    {
        text: 'Documentation',
        to: '/admin/administracion/instructores'
    },
    {
        text: 'About',
        to: '/admin/administracion/fichas'
    },
    {
        text: 'Contact me',
        to: '/admin/administracion/ambientes'
    },
    {
        text: 'Page 5'
    }
]
export default function Sidebar() {
    return (
        <aside className="sidebar light">
            <div>
                Administracion
            </div>
            <MenuComponent data={rutas}/>
        </aside>
    )
}