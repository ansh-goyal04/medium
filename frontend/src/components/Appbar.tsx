import { useNavigate } from "react-router-dom";

export default function Appbar(){
    const navigate=useNavigate();
    function handleClick(){
        localStorage.removeItem("token");
        navigate('/signin');
    }
    
    return(
        <div className="flex justify-between bg-gray-300 fixed w-full z-10">
            <div className="flex">
                <div className="p-2 mx-2 mt-2 font-serif text-3xl font-bold lg:mr-20">Medium</div>
                <div className="flex rounded-full bg-slate-100 m-3 p-1 h-10 w-25">
                 <input type="text" placeholder="Search" className="px-2 py-0 rounded-full bg-slate-100 border-none text-sm text-slate-900"/>
                 <button className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg></button>
                </div>
            </div>
            <div className="flex mx-3 mb-0 mt-3 justify-evenly">
                <div className="m-2">
                    <button onClick={()=>{
                        navigate('/create')
                    }} className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>Write
</button>
                </div>
                <div className="mr-2 p-2"><button onClick={handleClick}>Logout</button></div>
                <div>
<div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>
</div>
            </div>
        </div>
    )
}