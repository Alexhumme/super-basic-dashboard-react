import Button from "../../../components/common/Button"
import FormItem from "../../../components/common/FormItem";
import { useNavigate } from "react-router-dom";
import { app } from "../../../firebase";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from "react";

export default function HomeForm({ visible = true, type = 'Coordinador' }) {
    const [filtro, setFiltro] = useState('Ficha');
    const [valorFiltro, setValorFiltro] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth(app)
        if (type === 'Consulta') {
            console.log(`consultar horario de ${filtro} ${valorFiltro}`)
        } else {
            signInWithEmailAndPassword(auth, email, password).then((response) => {
                sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                console.log(`ingresando ${type} ${email} con contraseña ${password}`)
                navigate("/admin")
            }).catch((err) => {
                console.log(`${type} no se pudo ingresar con el correo ${email} y la contraseña ${password}`)
            })
        }
    }

    if (visible) {
        return (
            <div className="container-form">
                <span>Accediendo como {type}</span>
                <form onSubmit={handleSubmit}>
                    {
                        !(type === 'Consulta') ?
                            <>
                                <FormItem label='Documento' onChange={(e) => setEmail(e.target.value)} required />
                                <FormItem label='Contraseña' type="password" onChange={(e) => setPassword(e.target.value)} required />
                                <div><Button block type="submit">Iniciar sesion</Button></div>
                                <div><Button outline>Recuperar contraseña</Button></div>
                            </>
                            :
                            <>
                                <FormItem label='Filtro' onChange={(e) => setFiltro(e.target.value)} type="selector" value={filtro} opts={[
                                    'Ficha', 'Instructor', 'Ambiente'
                                ]} />
                                <FormItem label={filtro} onChange={(e) => setValorFiltro(e.target.value)} required />
                                <div><Button block type="submit">Consultar</Button></div>
                            </>
                    }
                </form>
            </div>
        )
    } else {
        return (<></>)
    }
}