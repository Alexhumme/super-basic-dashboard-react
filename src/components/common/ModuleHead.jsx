import Button from "./Button"
import FormItem from "./FormItem"

export default function ModuleHead({title, table=null}){
    
    return (
        <div className="module-title">
                <b>{ title }</b>
                <form onSubmit={(e)=>e.preventDefault()} className="module__query">
                    <FormItem hatLabel icon="search"/>
                    <Button type="submit" icon="filter" cType="mistery" outline round toolTip={`Seleccionar filtro ${title}`}></Button>
                </form>
                <span>
                    <Button cType="primary" icon="add">Agregar</Button>
                    <Button cType="danger" icon="delete" disabled>Eliminar seleccion</Button>
                    <Button cType="success" icon="download" disabled>Descargar seleccion</Button>
                </span>
            </div>
    )
}