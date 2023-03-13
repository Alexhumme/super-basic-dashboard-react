
import { useState } from "react"
import Form from "./Form"
export default function LoginForm() {
    const [formVisible,setFormVisible] = useState([true,false,false])
    return (
        <>
            <button onClick={()=>setFormVisible([true,false,false])}>Coordinador</button>
            <button onClick={()=>setFormVisible([false,true,false])}>Instructor</button>
            <button onClick={()=>setFormVisible([false,false,true])}>Consulta</button>
            <Form type="Coordinador" visible={formVisible[0]}></Form>
            <Form type="Instructor" visible={formVisible[1]}></Form>
            <Form type="Consulta" visible={formVisible[2]}></Form>
        </>
    )
}