import '../../assets/styles/dataTable.scss'
import Button from './Button'

export default function DataTable({data={cols:[],rows:[]}, title='titulo'}){
    return (
        <table className="datatable">
            <thead>
                <tr>
                    <th colSpan={data.cols.length+1}>{title}</th>
                    <td>Total de resultados : {data.rows.length}</td>
                </tr>
                <tr>
                    <td></td>
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
                                <td><input type="checkbox" name="" id="" /></td>
                                {
                                    data.cols.map((col)=>{
                                        return (col === 'id' ?  <th key={col}>{row[col]}</th> : <td key={col}>{row[col]}</td>)
                                    })
                                }
                                <td className='opciones'>
                                    <Button cType='danger' icon='trashcan' toolTip='Eliminar'/>
                                    <Button cType='info' icon='info' toolTip='Informacion'/>
                                    <Button cType='secondary' icon='edit' toolTip='Editar'/>
                                    <Button cType='success' icon='download' toolTip='Descargar'/>
                                    <Button cType='warning' icon='warning'toolTip='Alertar'/>
                                    <Button cType='primary' icon='asign'toolTip='Asignar a horario'/>
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