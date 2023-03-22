import { useNavigate } from "react-router-dom"
import Button from "../common/Button"

export default function NavbarItem({children, to, active=false}){
    const navigate = useNavigate()
    return (
        <li>
           <Button block outline={!active} action={()=>navigate(to)}>{children}</Button> 
        </li>
    )
}