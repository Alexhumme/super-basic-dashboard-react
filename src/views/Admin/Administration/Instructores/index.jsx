import DataTable from "../../../../components/common/DataTable"

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
                telefono: '002'
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
            </div>
            <div>
                <DataTable title="Prueba Instructores" data={testData}/>
            </div>
           
        </>
    )
}