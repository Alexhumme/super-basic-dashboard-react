import { FaCheck, FaCross } from "react-icons/fa"
import Avatar from "../Avatar"
import Button from "../Button"
import FormItem from "../FormItem"

export default function UserData({user = null}){
    return (
    <div className="userData">
        <div className="user__header">
        <Avatar />
        </div>
        <div className="user__body">
        <FormItem label="Cedula" disabled hatLabel />
        <FormItem label="Nombre completo" disabled hatLabel />
        <FormItem label="Cargo" disabled hatLabel />
        <FormItem label="Fecha de Nacimiento" type="date" disabled hatLabel />
        <FormItem label="Correo Electronico" type="email" disabled hatLabel />
        <FormItem label="contraseña" type="password" disabled hatLabel /> 
        </div>
        <div className="user__footer">
        <Button cType="dark" icon={FaCross} disabled>Descartar Cambios</Button>
        <Button cType="info" icon={FaCheck} disabled>Aplicar Cambios</Button>
        </div>
    </div>
    )
}