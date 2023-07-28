import { FaCalendar, FaDownload, FaEdit, FaInfo, FaTrash } from 'react-icons/fa'
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
                                    <Button cType='danger' round icon={FaTrash} toolTip='Eliminar'/>
                                    <Button cType='info' round icon={FaInfo} toolTip='Informacion'/>
                                    <Button cType='secondary' round icon={FaEdit} toolTip='Editar'/>
                                    <Button cType='success' round icon={FaDownload} toolTip='Descargar'/>
                                    <Button cType='primary' round icon={FaCalendar} toolTip='Asignar a horario'/>
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