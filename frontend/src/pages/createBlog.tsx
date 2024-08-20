import { useState } from "react";

export default function CreateBlog() {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });

  return (
    <div>
      <div className="bg-slate-100 fixed w-full flex justify-between">
        <div className="flex my-2">
          <div className="mt-2 px-2 font-serif text-3xl font-bold lg:ml-28">
            Medium
          </div>
          <div className="mt-5 text-sm font-normal">Draft in Anshmailbox</div>
        </div>
        <div className="flex my-2 px-2 lg:mr-28">
          <button className="rounded-full bg-green-600 h-6 w-16 text-sm text-white mt-3 mx-5 font-medium">
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
      <div className="w-3/4 justify-around border bg-slate-800">
        <div className="border">
            <input type="text" placeholder="Title" className="text-2xl border"/>
        </div>
        <div>
            <input type="text" />
        </div>
      </div>
    </div>
  )
}
