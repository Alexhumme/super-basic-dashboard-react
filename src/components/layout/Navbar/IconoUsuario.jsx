import { useState } from "react";
import Avatar from "../../common/Avatar";
import MenuUsuario from "./MenuUsuario";

export default function IconoUsuario() {
    const [hidden, setHidden] = useState(true)
    const handleHidden = ()=>{
        hidden ? 
        setHidden(false)
        :
        setHidden(true)
    }
    
    const notificaciones = 3;
    return (
        <>
            <div className={"userIcon "+(hidden ? "" : "active")} onClick={handleHidden}>
                <Avatar/>
                <span className="notifications">{notificaciones}</span>
                <span className="toolTip">Menu de usuario</span>
            </div>
            <MenuUsuario hidden={hidden} />
        </>
    )
}