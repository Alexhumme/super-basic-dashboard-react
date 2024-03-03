import { BiLoader } from "react-icons/bi"

export default function Button({
    children='', 
    cType='primary', 
    outline=false, 
    block=false, 
    action=()=>{}, 
    loading=false, 
    type='button', 
    round=false, 
    icon='', 
    toolTip='', 
    disabled
}){ 
    const btn = <button 
    type={type}
    className={
        `
        btn 
        ${cType} 
        ${outline ? ' outline':''} 
        ${disabled ? ' disabled':''}
        ${round ? ' round':''}
        ${loading ? ' loading':''}
        `
    } 
    disabled={disabled}
    onClick={action}
    >
        {
            loading 
            ? <BiLoader/>
            : children
            ? icon
                ? <>{children} {icon({style:{marginLeft:10}})}</>
                : children
            : icon && <>{icon()}</>
        }
        { toolTip ? <span className="toolTip">{toolTip}</span> : '' }
    </button>;
    return(block ? <div style={{display:"grid"}}>{btn}</div> : btn)
}