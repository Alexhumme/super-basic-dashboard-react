export default function Button({children='press', cType='primary', outline=false, block=false}){
    return(
        <button className={'btn '+cType+(outline ? ' outline':'')+(block ? ' block-btn':'')}>
            {children}
        </button>
    )
}