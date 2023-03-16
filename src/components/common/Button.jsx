export default function Button({children='press', cType='primary', outline=false, block=false, action=()=>{}}){
    return(
        <button className={'btn '+cType+(outline ? ' outline':'')+(block ? ' block-btn':'')} onClick={action}>
            {children}
        </button>
    )
}