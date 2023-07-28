import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function FormItem({
    children,
    label = "",
    type = "text",
    opts = [],
    onChange = () => { },
    required,
    disabled = false,
    value,
    hatLabel = false,
    icon = "",
}) {
    const [pwVisible, setPwVisivle] = useState(false);
    const showPw = () => {
        pwVisible ? setPwVisivle(false) : setPwVisivle(true);
    };
    return (
        <div className={"formItem" + (hatLabel ? " hatLabel" : "")}>
            <label htmlFor={label + type + (!disabled && '')}>
                {required ? <i>*</i> : <></>} {label}{" "}
            </label>
            {type === "selector" ? (
                <select
                    className="txt select"
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                    value={value}
                    id={label + type + !disabled && ''}
                >
                    {opts.map((opt) => {
                        return (
                            <option value={opt} key={opts.indexOf(opt)}>
                                {opt}
                            </option>
                        );
                    })}
                </select>
            ) : type === "radio" ? (
                <div className="radioGroup txt">
                    {opts.map((opt) => {
                        return (
                            <div
                                className=""
                                key={opts.indexOf(opt)}
                                id={label + type + !disabled && ''}
                            >
                                <label htmlFor={opt}>{opt}</label>
                                <input
                                    type="radio"
                                    name={label}
                                    id={opt}
                                    onChange={onChange}
                                    disabled={disabled}
                                    value={value}
                                />
                            </div>
                        );
                    })}
                </div>
            ) : type === "password" ? (
                <div className="password">
                    <input
                        type={pwVisible ? "text" : "password"}
                        className="txt"
                        required={required}
                        onChange={onChange}
                        disabled={disabled}
                        value={value}
                        id={label + type + !disabled && ''}
                    />
                    <button type="button" className="info btn" onClick={showPw}>
                        { pwVisible ? <FaEye/>:<FaEyeSlash/> }
                    </button>
                </div>
            ) : type === "textarea" || type === "textArea" ? (
                <textarea
                    name=""
                    className="txt"
                    cols="30"
                    rows="10"
                    disabled={disabled}
                    value={value}
                    id={label + type + !disabled && ''}
                ></textarea>
            ) : (
                <input
                    type={type}
                    className="txt"
                    required={required}
                    onChange={onChange}
                    disabled={disabled}
                    value={value}
                    id={label + type + !disabled && ''}
                />
            )}
            {icon ? icon({className:"inputIcon"}) : ""}
            {children}
        </div>
    );
}
