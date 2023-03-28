import { useLocation, useNavigate } from "react-router-dom"

export default function NavbarItem({children, to, action, toolTip}){
    const navigate = useNavigate()
    const location = useLocation().pathname
    const act =()=>{
        action ? 
        action()
        : 
        to && navigate(to)
    }
    return(
        <li className={to === location ?  "selected" : ""} onClick={act}>
            {children}
            {
                toolTip 
                ?
                <span className="toolTip">{toolTip}</span>
                :
                ''
            }
        </li>
    )
}