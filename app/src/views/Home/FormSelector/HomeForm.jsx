import Button from "../../../components/common/Button"
import FormItem from "../../../components/common/FormItem";
import { useNavigate } from "react-router-dom";
import { app } from "../../../firebase";
import { toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from "react";

export default function HomeForm({ visible = true, type = 'Funcionario' }) {
    const [filtro, setFiltro] = useState('Ficha');
    const [valorFiltro, setValorFiltro] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth(app)
        setLoading(true)
        if (type === 'Consulta') {
            console.log(`consultar horario de ${filtro} ${valorFiltro}`)
        } else {
            signInWithEmailAndPassword(auth, email, password).then((response) => {
                sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                navigate("/admin")
            }).catch((err) => {
                toast.error(`Correo o contraseña erroneos`, {
                    position: toast.POSITION.TOP_RIGHT
                })
                setLoading(false)
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
                                <FormItem label='Email' onChange={(e) => setEmail(e.target.value)} required />
                                <FormItem label='Contraseña' type="password" onChange={(e) => setPassword(e.target.value)} required />
                                <div><Button block type="submit" loading={loading}>Iniciar sesion</Button></div>
                                <div><Button outline type="reset">Recuperar contraseña</Button></div>
                            </>
                            :
                            <>
                                <FormItem label='Filtro' onChange={(e) => setFiltro(e.target.value)} type="selector" value={filtro} opts={[
                                    'Ficha', 'Instructor', 'Ambiente'
                                ]} />
                                <FormItem label={filtro} onChange={(e) => setValorFiltro(e.target.value)} required />
                                <div><Button block type="submit" loading={loading}>Consultar</Button></div>
                            </>
                    }
                </form>
            </div>
        )
    } else {
        return (<></>)
    }
}