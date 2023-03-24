import LoadIcon from "./LoadIcon"

export default function Button({children='press', cType='primary', outline=false, block=false, action=()=>{}, loading=false, type='button', disabled}){
    
    return(
        <button 
        type={type}
        className={'btn '+cType+(outline ? ' outline':'')+(block ? ' block-btn':'')+(disabled ? ' disabled':'')} 
        disabled={disabled}
        onClick={action}
        >
            {
                !loading 
                ?
                children
                :
                LoadIcon()
            }
        </button>
    )
}