export default function Icon({type, style={}}){
    return (
        <img
            style={style}
            src={
            type === 'load' ? require('../../../assets/imgs/icons/load.png')
            : type === 'eye_on' ? require('../../../assets/imgs/icons/visto.png')
            : type === 'eye_off' ? require('../../../assets/imgs/icons/ocultar.png') 
            : type === 'trashcan' ? require('../../../assets/imgs/icons/delete.png')
            : type === 'edit' ? require('../../../assets/imgs/icons/pencil.png')
            : type === 'info' ? require('../../../assets/imgs/icons/info.png')
            : type === 'download' ? require('../../../assets/imgs/icons/download.png')
            : type === 'warning' ? require('../../../assets/imgs/icons/warning.png')
            : type === 'work' ? require('../../../assets/imgs/icons/trabajar.png')
            : type === 'asign' ? require('../../../assets/imgs/icons/asignar.png')
            : '' 
        } 
        className = {'icon '+type}
        alt="" />
    )
}