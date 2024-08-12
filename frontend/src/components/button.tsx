export default function Button({onClick,buttonText}:any){
    return <div className="bg-slate-950 w-full rounded text-white mt-7 p-2 flex flex-col justify-center text-sm">
        <button onClick={onClick} className="">{buttonText}</button>
    </div>
}