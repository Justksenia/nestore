import React, { ButtonHTMLAttributes, ChangeEvent, MouseEventHandler, ReactNode } from "react"
import style from "./Button.module.css"
import classNames from "classnames"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:"primary" | "black" | "normalDark"
    className?:string
    children?:ReactNode
 
}

const Button:React.FC<IButton> =({ type, disabled, onClick, variant, children, className,  ...props})=>{
    return (
        <button disabled={disabled} type={type} onClick={onClick}
        className={classNames(
            style.btn,
            variant==="primary" && style.primaryBtn,
            variant==="black" && style.blackBtn,
            variant==="normalDark" && style.normalDark,
            className
        )}
              {...props}>{children}</button>
    )
}
export default Button