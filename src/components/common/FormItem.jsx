export default function FormItem({ label, type='text', opts = [], onChange=()=>{}, required }) {
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
                <div className="radioGroup">
                    {opts.map((opt)=>{
                        return <input type="radio" name={label} id={opt} key={opts.indexOf(opt)} onChange={onChange}/>
                    })}
                </div>
                :
                <input type={type} className={type === 'text' || type === 'password' ? 'txt' : ''} required={required} onChange={onChange}/>
            }
        </div>
    )
}