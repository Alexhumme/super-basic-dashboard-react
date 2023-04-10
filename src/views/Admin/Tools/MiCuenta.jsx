import Button from "../../../components/common/Button"
import UserData from "../../../components/common/UserData"

export default function MiCuenta(){

    return (
        <>
            <div className="module-title">
                Mi cuenta
                <Button icon="edit" cType="secondary">Editar informacion</Button>
            </div>
            <div>
                <UserData /> 
            </div>
        </>
    )
}