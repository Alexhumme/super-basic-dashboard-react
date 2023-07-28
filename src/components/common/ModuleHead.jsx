import { FaDownload, FaFilter, FaPlus, FaSearch, FaTrash } from "react-icons/fa"
import Button from "./Button"
import FormItem from "./FormItem"

export default function ModuleHead({title, table=null}){
    
    return (
        <div className="module-title">
                <b>{ title }</b>
                <form onSubmit={(e)=>e.preventDefault()} className="module__query">
                    <FormItem hatLabel icon={FaSearch}/>
                    <Button type="submit" icon={FaFilter} cType="mistery" outline round toolTip={`Seleccionar filtro ${title}`}></Button>
                </form>
                <span>
                    <Button cType="primary" icon={FaPlus}>Agregar</Button>
                    <Button cType="danger" icon={FaTrash} disabled>Eliminar seleccion</Button>
                    <Button cType="success" icon={FaDownload} disabled>Descargar seleccion</Button>
                </span>
            </div>
    )
}