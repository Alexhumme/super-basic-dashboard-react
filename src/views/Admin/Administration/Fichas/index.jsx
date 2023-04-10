import Button from "../../../../components/common/Button"
import DataTable from "../../../../components/common/DataTable"

export default function Fichas() {
    return (
        <>
            <div className="module-title">
                Fichas
                <span>
                    <Button cType="primary" icon="add">Agregar</Button>
                    <Button cType="danger" icon="delete" disabled>Eliminar seleccion</Button>    
                </span>
            </div>
            <div>
                <DataTable title="Fichas"/>
            </div>

        </>
    )
}