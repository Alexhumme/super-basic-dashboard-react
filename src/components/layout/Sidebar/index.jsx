import MenuComponent from "../../common/MenuComponent"

export default function Sidebar() {
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
            <MenuComponent data={rutas}/>
        </aside>
    )
}