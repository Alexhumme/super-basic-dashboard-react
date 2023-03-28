import load from '../../../assets/imgs/icons/load.png';
import eye_on from '../../../assets/imgs/icons/visto.png';
import eye_off from '../../../assets/imgs/icons/ocultar.png';
import trashcan from '../../../assets/imgs/icons/delete.png';
import edit from '../../../assets/imgs/icons/pencil.png';
import warning from '../../../assets/imgs/icons/warning.png';
import download from '../../../assets/imgs/icons/download.png';
import info from '../../../assets/imgs/icons/info.png';

export default function Icon({type, style={}}){
    return (
        <img
            style={style}
            src={
            type === 'load' ? load
            : type === 'eye_on' ? eye_on 
            : type === 'eye_off' ? eye_off 
            : type === 'trashcan' ? trashcan 
            : type === 'edit' ? edit 
            : type === 'info' ? info
            : type === 'download' ? download
            : type === 'warning' ? warning
            : '' 
        } 
        className = {'icon '+type}
        alt="" />
    )
}