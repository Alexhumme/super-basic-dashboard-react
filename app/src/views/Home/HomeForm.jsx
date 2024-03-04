import Button from "../../components/common/Button"
import FormItem from "../../components/common/FormItem";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useState } from "react";
import { FaDoorOpen, FaLinux, FaMailBulk, FaMailchimp } from "react-icons/fa";
import { BiEnvelope, BiLock, BiLogIn } from "react-icons/bi";

export default function HomeForm() {
    const [form, setForm] = useState({
        email : null,
        password : null,
        remember : false
    });
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(()=>{
            if (form.remember){
                sessionStorage.setItem('Auth Token', "response._tokenResponse.refreshToken")
                console.log(form)
                navigate("/admin")
            } else {
                toast.error(`Wrong email or password`, {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            }
            setLoading(false)
        }, 1000)

    }

    return (
        <div className="form-container">
            <span className="form-title">Log-in</span>
            <form onSubmit={handleSubmit}>
                <FormItem icon={BiEnvelope} hatLabel label='Email' type="email" onChange={(e) => setForm({...form, email : e.target.value})} required />
                <FormItem icon={BiLock} hatLabel label='Password' type="password" onChange={(e) => setForm({...form, password : e.target.value})} required />
                <FormItem label="Remember me" type="checkbox" onChange={(e)=>setForm({...form, remember: !form.remember})}/>
                <Button block type="submit" icon={BiLogIn} loading={loading}>Log In</Button>
                <Button outline type="reset">Recover Password</Button>
            </form>
        </div>
    )

}