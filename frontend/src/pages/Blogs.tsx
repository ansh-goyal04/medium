import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function Blogs() {
  interface Blog{
    title:string,
    authorname:string,
    publishedAt:string,
    topic:string,
    content:string

  }
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(()=>{
    async function func(){
      const response=axios.get(`${BACKEND_URL}/api/v1/blog/bulk`);
      setBlogs((await response).data.blogs);
    }
    func()
  },[blogs])

  return (
    <div className="flex flex-col">
      <Appbar />
      
      {/* Navbar */}
      <div className="flex justify-around z-10 mt-4">
        <div className="w-2/3 border-b-2 flex pb-4 mb-6 fixed top-16 z-20">
          <button className="mx-4 text-zinc-900 text-sm hover:text-slate-900 hover:font-semibold">
            For you
          </button>
          <button className="mx-4 text-zinc-900 text-sm hover:text-slate-900 hover:font-semibold">
            Marketing
          </button>
          <button className="mx-4 text-zinc-900 text-sm hover:text-slate-900 hover:font-semibold">
            Business
          </button>
          <button className="mx-4 text-zinc-900 text-sm hover:text-slate-900 hover:font-semibold">
            AI
          </button>
          <button className="mx-4 text-zinc-900 text-sm hover:text-slate-900 hover:font-semibold">
            Lifestyle
          </button>
          <button className="mx-4 text-zinc-900 text-sm hover:text-slate-900 hover:font-semibold">
            Politics
          </button>
          <button className="mx-4 text-zinc-900 text-sm hover:text-slate-900 hover:font-semibold">
            Entrepreneurship
          </button>
        </div>
      </div>
      
      {/* Blog Content */}
      <div className="relative top-32 z-0 overflow-hidden">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            authorname={blog.authorname}
            publishedAt={blog.publishedAt}
            topic={blog.topic}
            content={blog.content}
          />
        ))}
      </div>
    </div>
  );
}
