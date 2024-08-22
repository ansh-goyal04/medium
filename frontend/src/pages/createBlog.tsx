import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { CreateblogInp } from "@ansh_goyal/medium";

export default function CreateBlog() {
  const navigate=useNavigate();
  const [blog, setBlog] = useState<CreateblogInp>({
    title: "",
    content: "",
    topic:""
  });

  const handleclick=async()=>{
    try{
      const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,blog,{
        headers:{
          Authorization:"Bearer"+localStorage.getItem("token")
        }
      })
      console.log(response);
      
      navigate('/blogs');
    }
    catch(err){
      console.log(err);
      
    }
  }
  return (
    <div>
      <div className="bg-slate-100 fixed top-0 w-full flex justify-between shadow-md">
        <div className="flex my-2">
          <div className="mt-2 px-2 font-serif text-3xl font-bold lg:ml-28">
            Medium
          </div>
          <div className="mt-5 text-sm font-normal">Draft in Anshmailbox</div>
        </div>
        <div className="flex my-2 px-2 lg:mr-28">
          <button className="rounded-full bg-green-600 h-6 w-16 text-sm text-white mt-3 mx-5 font-medium" onClick={handleclick}>
            Publish
          </button>
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-12 h-12 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-col mx-44 w-2/3 mt-24">
      <div className="mt-4">
        <textarea  placeholder="Title" rows={2} className="text-5xl w-full text-wrap font-medium outline-none font-serif" onChange={(e)=>{
          setBlog({
            ...blog,
            title:e.target.value
          })
        }}/>
      </div>
      <div className="">
        <textarea  placeholder="Tell your story ..." rows={9} className="font-serif text-3xl font-normal w-full outline-none text-wrap"onChange={(e)=>{
          setBlog({
            ...blog,
            content:e.target.value
          })
        }}/>
      </div>
      <div className="">
        <input type="text"  placeholder="Topic" className="font-serif text-4xl font-normal w-full outline-none text-wrap"onChange={(e)=>{
          setBlog({
            ...blog,
            topic:e.target.value
          })
        }}/>
      </div>
      </div>
    </div>
  )
}
