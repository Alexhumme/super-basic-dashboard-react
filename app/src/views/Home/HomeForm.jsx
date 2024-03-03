import Button from "../../components/common/Button"
import FormItem from "../../components/common/FormItem";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useState } from "react";

export default function HomeForm() {
    const [form, setForm] = useState({
        email : null,
        password : null,
        remember : false
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(()=>{
            /*signInWithEmailAndPassword(auth, email, password).then((response) => {
                sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                navigate("/admin")
            }).catch((err) => {
                toast.error(`Wrong email or password`, {
                    position: toast.POSITION.TOP_RIGHT
                })
            })*/
            console.log(form)
            setLoading(false)
        }, 1000)

    }

    return (
        <div className="form-container">
            <span className="form-title">Log-in</span>
            <form onSubmit={handleSubmit}>
                <FormItem hatLabel label='Email' onChange={(e) => setEmail(e.target.value)} required />
                <FormItem hatLabel label='Password' type="password" onChange={(e) => setPassword(e.target.value)} required />
                <FormItem label="Remember me" type="checkbox" onChange={(e)=>setForm((form)=>form+{remember : e.target.value})}/>
                <Button block type="submit" loading={loading}>Iniciar sesion</Button>
                <Button outline type="reset">Recuperar contraseña</Button>
            </form>
        </div>
    )

}