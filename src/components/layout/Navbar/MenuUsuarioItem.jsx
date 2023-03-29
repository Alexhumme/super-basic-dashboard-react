import { useLocation, useNavigate } from "react-router-dom"
import Button from "../../common/Button"

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
        <li>
        <Button className={to === location ?  "selected" : ""} action={act} block>
            {children}
            {
                toolTip 
                ?
                <span className="toolTip">{toolTip}</span>
                :
                ''
            }
        </Button>
        </li>
    )
}