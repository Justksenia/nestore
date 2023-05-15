import React, { ChangeEventHandler } from "react"
import {ITypes, IBrands} from "../../types/DeviceTypes"

// interface IDropdown {
//     options:ITypes[] | IBrands[]
//     defaultValue:string
//     setValue:(e:ChangeEventHandler<HTMLSelectElement>)=>void
//     value:string
    
// }

const DropDown=({options, setValue, value})=>{
 
    return (
        <select value={value} onChange={(e)=>setValue(e.target.value)} className="border-2 p-2 my-2 focus:border-grey focus:outline-none focus-visible:border-grey">
           
              {options.map(item =>
                <option key={item.id} value={item.id}>
                    {item.name}
                </option>
            )}
        </select>
    )
}
export default DropDown;