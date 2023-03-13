import Button from "../../../components/Button"
export default function Form({visible=true, type='Coordinador'}){
    let filtro = 'ficha';
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("enviar")
    }
    if (visible){
        return(
            <div className="container-form">
                    <span>{type}</span>
                    <form onSubmit={handleSubmit}>
                        {
                            !(type === 'Consulta') ?
                            <>
                            <div><label htmlFor="">Documento: </label><input type="text" className="txt" /></div>
                            <div><label htmlFor="">Contraseña: </label><input type="text" className="txt" /></div>
                            <div><Button block type="submit">Iniciar sesion</Button></div>
                            <div><Button outline>Recuperar contraseña</Button></div>
                            </>
                            :
                            <>
                            <div><label htmlFor="">Filtro: </label><input type="text" className="txt" /></div>
                            <div><label htmlFor="">{filtro}</label><input type="text" className="txt" /></div>
                            <div><Button block type="submit">Consultar</Button></div>
                            </>
                        }
                    </form>
            </div>
        )
    }else{
        return(<></>)
    }
}