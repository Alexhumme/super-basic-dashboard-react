import DataTable from "../../../../components/common/DataTable"
import ModuleHead from "../../../../components/common/ModuleHead"

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
            <ModuleHead title={"Instructores"} />
            <div>
                <DataTable title="Prueba Instructores" data={testData}/>
            </div>
           
        </>
    )
}