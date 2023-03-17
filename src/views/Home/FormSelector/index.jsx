
import { useState } from "react"
import Form from "./HomeForm"
export default function FormSelector() {
    const [formVisible,setFormVisible] = useState([true,false,false])
    return (
        <>
            <div className="selectors">
            <button className={formVisible[0] ? 'selected' : ''} onClick={()=>setFormVisible([true,false,false])}>Coord.</button>
            { /*<button className={formVisible[1] ? 'selected' : ''} onClick={()=>setFormVisible([false,true,false])}>Instr.</button>*/}
            <button className={formVisible[2] ? 'selected' : ''} onClick={()=>setFormVisible([false,false,true])}>Consulta</button>
            </div>
            <Form type="Coordinador" visible={formVisible[0]}></Form>
            { /*<Form type="Instructor" visible={formVisible[1]}></Form>*/}
            <Form type="Consulta" visible={formVisible[2]}></Form>
            
        </>
    )
}