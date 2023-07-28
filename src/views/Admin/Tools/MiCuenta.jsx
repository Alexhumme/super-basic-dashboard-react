import { FaEdit } from "react-icons/fa"
import Button from "../../../components/common/Button"
import UserData from "../../../components/common/UserData"

export default function MiCuenta(){

    return (
        <>
            <div className="module-title">
                Mi cuenta
                <Button icon={FaEdit} cType="secondary">Editar informacion</Button>
            </div>
            <div>
                <UserData /> 
            </div>
        </>
    )
}