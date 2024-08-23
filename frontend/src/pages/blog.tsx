import { useEffect, useState } from "react";
import Appbar from "../components/Appbar"
import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function Blog(){
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [blog,setBlog]=useState({
        title:"",
        content:"",
        publishedAt:"",
        authorName:""

    });
console.log(id);

    useEffect(()=>{
        async function func(){
            const response=await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                headers:{
                    Authorization:"Bearer "+localStorage.getItem("token")
                }
            })
            console.log(response);
            
            setBlog(response.data.getblog)
        }
        func();
    },[])
    
    
    return<>
    <div className="flex min-h-full">
        <Appbar/>
        <div className="w-3/4 pt-16 pl-16 pr-8 pb-10 mt-10">
        <div className="text-6xl font-bold pb-2">{blog.title}</div>
        <div className="text-slate-500 font-medium pb-6 mt-2">Posted on {blog.publishedAt}</div>
        <div className="text-pretty text-slate-800 font-medium">{blog.content}</div>
        </div>
        <div className="w-1/4 flex flex-col p-4 mt-20">
        <div className="p-2 text-slate-600 font-medium">Author</div>
        <div className="flex">
            
<div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 p-2 mt-4">
    <span className="font-medium text-gray-600 dark:text-gray-300">{blog.authorName.toUpperCase()[0]}</span>
</div>
<div className="mx-4 text-2xl font-bold mt-4">{blog.authorName}</div>
        </div>
        </div>
    </div>
    </>
}