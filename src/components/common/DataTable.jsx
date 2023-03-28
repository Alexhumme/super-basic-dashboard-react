import '../../assets/styles/dataTable.scss'
import Button from './Button'

export default function DataTable({data={cols:[],rows:[{id:''}]}, title='titulo'}){
    return (
        <table className="datatable">
            <thead>
                <tr>
                    <th colSpan={data.cols.length}>{title}</th>
                    <td>Total de resultados : {data.rows.length}</td>
                </tr>
                <tr>
                    {
                        data.cols.map(col => {
                            return <th key={col}>{col}</th>
                        })
                    }
                    <th>opciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.rows.map((row)=>{
                        return (
                            <tr key={row.id}>
                                {
                                    data.cols.map((col)=>{
                                        return (col === 'id' ?  <th key={col}>{row[col]}</th> : <td key={col}>{row[col]}</td>)
                                    })
                                }
                                <td className='opciones'>
                                    <Button cType='danger' icon='trashcan' toolTip='Eliminar'></Button>
                                    <Button cType='info' icon='info'></Button>
                                    <Button cType='secondary' icon='edit'></Button>
                                    <Button cType='success' icon='download'></Button>
                                    <Button cType='warning' icon='warning'></Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot></tfoot>
        </table>
    )
}