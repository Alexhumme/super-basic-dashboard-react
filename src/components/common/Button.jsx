import Icon from "./Icon"

export default function Button({children='', cType='primary', outline=false, block=false, action=()=>{}, loading=false, type='button', icon='', toolTip='', disabled}){
    
    return(
        <button 
        type={type}
        className={'btn '+cType+(outline ? ' outline':'')+(block ? ' block-btn':'')+(disabled ? ' disabled':'')} 
        disabled={disabled}
        onClick={action}
        >
            {
                loading 
                ?
                <Icon type='load'/>
                :
                children
                ?
                    icon
                    ?
                    <>{children} <Icon type={icon} style={{marginLeft: 5}}/></>
                    :
                    children
                :
                icon 
                ?
                <Icon type={icon}/>
                : 'button'
            }
            {
                toolTip 
                ?
                <span className="toolTip">{toolTip}</span>
                :
                ''
            }
        </button>
    )
}