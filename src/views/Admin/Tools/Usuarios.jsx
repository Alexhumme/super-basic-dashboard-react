import DataTable from "../../../components/common/DataTable"
import FormItem from "../../../components/common/FormItem"
import Button from "../../../components/common/Button"
import ModuleHead from "../../../components/common/ModuleHead"

export default function Usuarios(){
    
    return (
        <>        
            <ModuleHead title={"Usuarios"}/>
            <div>
                <FormItem type="password" value={'000000'} label="contraseña de Acceso aprendiz" disabled >

                <Button cType="warning" icon="warning"
                    toolTip={`
                    Al cambiar la clave comun especifica la contraseña necesaria
                    para que los aprendices puedan relizar consultas sobre sus asignaciones.

                    Asegurece de informar este cambio a los instructores para que compartan
                    la nueva clave con sus aprendices
                    `}
                >Cambiar</Button>
                </FormItem>
            </div>
            <div>
                <DataTable title="Usuarios"/>
            </div>
    
        </>
    )
}