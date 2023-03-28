import Icon from "./Icon"
import { useState } from "react"

export default function FormItem({ label='Input', type='text', opts = [], onChange=()=>{}, required }) {
    const [pwVisible, setPwVisivle] = useState(false)
    const showPw = ()=>{
        pwVisible ? 
        setPwVisivle(false)
        :
        setPwVisivle(true)
    }
    return (
        <div className="formItem">
            <label>{required ? <i>*</i>:<></>}  {label}: </label>
            {
                type === 'selector' ?
                <select className="txt select" onChange={onChange} required={required}>
                    {opts.map((opt)=>{
                        return <option value={opt} key={opts.indexOf(opt)}>{opt}</option>
                    })}
                </select>
                : type === 'radio' ?
                <div className="radioGroup txt">
                    {opts.map((opt)=>{
                        return (
                            <div className="" key={opts.indexOf(opt)}>
                                <label htmlFor={opt}>{opt}</label>
                                <input type="radio" name={label} id={opt} onChange={onChange}/>
                            </div>
                            )
                    })}
                </div>
                : type === 'password' ?
                <div className="password">
                <input type={pwVisible ? 'text' : 'password'} className="txt" required={required} onChange={onChange}/>
                <button type="button" className="info btn" onClick={showPw}> <Icon type={pwVisible ? 'eye_on' : 'eye_off'}/></button>
                </div>
                : type === 'textarea' || type === 'textArea' ?
                <textarea name="" className='txt' id="" cols="30" rows="10"></textarea>
                :
                <input type={type} className='txt' required={required} onChange={onChange}/>
            }
        </div>
    )
}