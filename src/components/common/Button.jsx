import Icon from "./Icon"

export default function Button({children='', cType='primary', outline=false, block=false, action=()=>{}, loading=false, type='button', round=false, icon='', toolTip='', disabled}){
    
    return(
        <button 
        type={type}
        className={
            `
            btn 
            ${cType} 
            ${outline ? ' outline':''} 
            ${block ? ' block-btn':''}
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
                ?
                <Icon type='load'/>
                :
                children
                ?
                    icon
                    ?
                    <>{children} <Icon type={icon} iconStyle={{ marginLeft: '10px' }}/></>
                    :
                    children
                :
                icon 
                ?
                <Icon type={icon}/>
                : ''
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