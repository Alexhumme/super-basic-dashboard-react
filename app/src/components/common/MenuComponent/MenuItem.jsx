import { useNavigate } from "react-router-dom"
import Button from "../Button"

export default function NavbarItem({ children, to = false, active = false, action = false, toolTip = '', cType = 'primary' }) {
    let able = action ? true : to ? true : false
    const navigate = useNavigate()
    const act = () => {
        action ?
            action()
            : to && navigate(to)
    }
    return (
        <li>
            <Button
                block
                outline={action ? false : !active}
                cType={cType}
                action={act}
                disabled={!able}
                toolTip={toolTip}>
                {children}
            </Button>
        </li>
    )
}