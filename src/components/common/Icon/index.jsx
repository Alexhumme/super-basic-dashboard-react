export default function Icon({ type, iconStyle={}, className = ''}){
    const myIcon = type === 'load' ? require('react-icons/bi').BiLoader
    : type === 'eye_on' ? require('react-icons/fa').FaEye
    : type === 'eye_off' ? require('react-icons/fa').FaEyeSlash
    : type === 'delete' ? require('react-icons/fa').FaTrash
    : type === 'edit' ? require('react-icons/fa').FaEdit
    : type === 'info' ? require('react-icons/fa').FaInfo
    : type === 'add' ? require('react-icons/fa').FaPlus
    : type === 'cross' ? require('react-icons/fa').FaTimes
    : type === 'check' ? require('react-icons/fa').FaCheck
    : type === 'download' ? require('react-icons/fa').FaDownload
    : type === 'warning' ? require('react-icons/fi').FiAlertTriangle
    : type === 'asign' ? require('react-icons/bs').BsFillCalendarPlusFill
    : type === 'search' ? require('react-icons/fa').FaSearch
    : type === 'filter' ? require('react-icons/fa').FaFilter
    : '' 
    return myIcon({style:iconStyle, className: className})
}