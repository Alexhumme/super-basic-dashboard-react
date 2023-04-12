import Button from "./Button"
import FormItem from "./FormItem"

export default function ModuleHead({title, table=null}){
    
    return (
        <div className="module-title">
                <span>{ title }</span>
                <form onSubmit={(e)=>e.preventDefault()} className="module__query">
                    <FormItem hatLabel />
                    <Button type="submit" icon="search" cType="info" toolTip={`Consultar ${title}`}></Button>
                </form>
                <span>
                    <Button cType="primary" icon="add">Agregar</Button>
                    <Button cType="danger" icon="delete" disabled>Eliminar seleccion</Button>
                    <Button cType="success" icon="download" disabled>Descargar seleccion</Button>
                </span>
            </div>
    )
}