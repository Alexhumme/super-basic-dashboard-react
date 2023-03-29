import { useNavigate } from "react-router-dom"
import Button from "../../common/Button"

export default function NavbarItem({children, to=false, active=false, action=false}){
    let able = action ? true : to ? true : false
    const navigate = useNavigate()
    const act =()=>{
        action ? 
        action()
        : to && navigate(to)
    }
    return (
        <li>
           <Button block outline={!active} action={act} disabled={!able}>{children}</Button> 
        </li>
    )
}