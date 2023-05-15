import { ChangeEvent, InputHTMLAttributes } from "react";
import style from "./Input.module.css"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type:string
    placeholder?:string
    value?:string | number
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

}

const Input:React.FC<IInputProps>=({type, placeholder, value, onChange})=>{
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={style.primary}/>
    )
}

export default Input