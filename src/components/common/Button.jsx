import LoadIcon from "./LoadIcon"

export default function Button({children='press', cType='primary', outline=false, block=false, action=()=>{}, loading=false, type='button'}){
    return(
        <input 
        type={type}
        className={'btn '+cType+(outline ? ' outline':'')+(block ? ' block-btn':'')} 
        onClick={action}
        value={
                !loading 
                ?
                children
                :
                'cargando...'
            }
        />
    )
}