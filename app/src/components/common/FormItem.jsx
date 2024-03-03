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
    icon = "",
}) {
    const [pwVisible, setPwVisivle] = useState(false);
    const id = (label + type + !disabled && '').replace(" ", "_")
    const showPw = () => {
        pwVisible ? setPwVisivle(false) : setPwVisivle(true);
    };
    return (
        <div className={"formItem " + type}>
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
                    id={id}
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
                                id={id}
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
                        id={id}
                    />
                    <button type="button" className="primary btn" onClick={showPw}>
                        {pwVisible ? <FaEye /> : <FaEyeSlash />}
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
                    id={id}
                ></textarea>
            ) : type === "checkbox" ? (
                <input type="checkbox" required={required}
                    onChange={onChange}
                    disabled={disabled}
                    value={value}
                    id={id} />
            ) : (
                <input
                    type={type}
                    className="txt"
                    required={required}
                    onChange={onChange}
                    disabled={disabled}
                    value={value}
                    id={id}
                />
            )}
            {icon ? icon({ className: "inputIcon" }) : ""}
            {children}
        </div>
    );
}
