import DataTable from "../../../components/common/DataTable"
import FormItem from "../../../components/common/FormItem"
import Button from "../../../components/common/Button"

export default function Usuarios(){
    return (
        <>        
            <div className="module-title">
                Usuarios
                <span>
                    <Button cType="primary" icon="asign">Agregar</Button>
                    <Button cType="danger" icon="trashcan" disabled>Eliminar seleccion</Button>    
                </span>    
            </div>
            <div>
                <FormItem type="password" value={'000000'} label="contraseña de Acceso aprendiz" disabled hatLabel/>
                <Button cType="warning" outline icon="warning">Cambiar</Button>
            </div>
            <div>
                <DataTable title="Usuarios"/>
            </div>
    
        </>
    )
}