import { useState } from "react";
import Avatar from "../../common/Avatar";
import MenuUsuario from "./MenuUsuario";

export default function IconoUsuario() {
    const [hidden, setHidden] = useState(true)
    const handleHidden = () =>{
        setHidden(!hidden)
    }
    
    const notificaciones = 9;
    return (
        <>
            <div className={"userIcon "+(hidden ? "" : "active")} onClick={handleHidden}>
                <Avatar/>
                {notificaciones ? <span className="notifications">{notificaciones}</span> : ''}
                <span className="toolTip">Menu de usuario</span>
            </div>
            <MenuUsuario hidden={hidden} />
        </>
    )
}