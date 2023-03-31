import { useLocation } from "react-router-dom"
import MenuItem from './MenuItem'

export default function MenuComponent({data = []}) {
    const location = useLocation().pathname
    return (
        <ul className="menu">
            {   
                data &&
                data.map(dataUnit => {
                    return (
                        <MenuItem
                            to={dataUnit.to}
                            key={data.indexOf(dataUnit)}
                            active={dataUnit.to === location}
                            action = {dataUnit.action}
                            cType={dataUnit.cType}
                            toolTip={dataUnit.toolTip}
                        >
                            {dataUnit.text}
                        </MenuItem>
                    )
                })

            }
        </ul>
    )
}