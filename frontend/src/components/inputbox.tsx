import { ChangeEvent} from "react"

interface input{
    placeholder:string,
    label:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    type?:string
}

export default function InputBox({placeholder,label,onChange,type}:input){
    return <div className="text-black-300">
        <div className="text-base font-medium my-3">
            {label}</div>
        <input placeholder={placeholder} type={type || "text"} onChange={onChange} className="border-slate-200 w-full px-2 py-1 border rounded text-sm" />
    </div>
}