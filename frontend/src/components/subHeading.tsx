import { Link } from "react-router-dom"
interface heading{
    heading:string,
    link:string,
    text:string,
    to:string
}
export default function SubHeading({heading,link,text,to}:heading){
    return <div className="flex m-auto flex-col place-content-center w-full">
        <div className="flex mx-auto text-3xl font-bold">{heading}</div>
        <div className="flex m-auto font-light mt-2 mb-7">
            {text}
            <Link className="mx-2 cursor-pointer underline" to={to}>{link}</Link>
        </div>
    </div>
}