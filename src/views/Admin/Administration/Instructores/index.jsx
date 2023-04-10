import DataTable from "../../../../components/common/DataTable"
import Button from "../../../../components/common/Button"
export default function Instructores(){
    const testData = {
        rows: [
            {
                id: '1',
                nombre: 'item 1',
                cedula: '111',
                telefono: '001'
            },
            {
                id: '2',
                nombre: 'item 2',
                cedula: '2',
                telefono: '002',
                direccion: 'cr24b cll12c-43'
            },
            {
                id: '3',
                nombre: 'item 3',
                cedula: '3',
                telefono: '003'
            },
        ],
        cols: [
            'id',
            'nombre',
            'cedula',
            'telefono',
            'direccion',
        ]
    }
    return (
        <>
            <div className="module-title">
                Instructores
                <span>
                    <Button cType="primary" icon="add">Agregar</Button>
                    <Button cType="danger" icon="delete" disabled>Eliminar seleccion</Button>    
                </span>
            </div>
            <div>
                <DataTable title="Prueba Instructores" data={testData}/>
            </div>
           
        </>
    )
}