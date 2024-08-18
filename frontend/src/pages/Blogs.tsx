import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  return (
    
    <div className="flex flex-col">
      <Appbar/>
      <div className="flex justify-around z-11">
      <div className="w-2/3 border-b-2 flex mt-4 pb-4 mb-6 fixed top-20 z-100 overflow-hidden ">
      <button className="mx-4 zinc-900 text-sm hover:text-slate-900 hover:font-semibold">For you</button>
      <button className="mx-4 text-zinc-900 text-sm hover:text-slate-900 hover:font-semibold">Marketing</button>
      <button className="mx-4 text-zinc-900 text-sm hover:text-slate-900 hover:font-semibold">Bussiness</button>
      <button className="mx-4 text-zinc-900 text-sm hover:text-slate-900 hover:font-semibold">AI</button>
      <button className="mx-4 text-zinc-900 text-sm hover:text-slate-900 hover:font-semibold">Lifestyle</button>
      <button className="mx-4 text-zinc-900 text-sm hover:text-slate-900 hover:font-semibold">Politics</button>
      <button className="mx-4 text-zinc-900 text-sm hover:text-slate-900 hover:font-semibold">Entrepreneurship</button>


      </div>
      </div>
      <div className="relative top-40 z-0 overflow-hidden">
      <BlogCard
        title="title of the blog irst title title first bla vla bla te first title is suposed ito be a large one "
        authorname="ansh"
        publishedAt="13 aug"
        shortTitle="Node js"
        content="kdgas ydfadfdadf asjsvasdjhdy dasjdv a jdfsah vjsdshdvajdv asdhvaddas d asdas dhasddjsd adasdva shdvasda sdvasdsv dasdvasdv  as da shgvd asdgdd bdu DdhDHDDJdJ DJDVhdKHDd DVkdHDVakd HDVdhvcDKHVd" 
      ></BlogCard>

<BlogCard
        title="title of the blog irst title title first bla vla bla te first title is suposed ito be a large one "
        authorname="ansh"
        publishedAt="13 aug"
        shortTitle="Node js"
        content="kdgas ydfadfdadf asjsvasdjhdy dasjdv a jdfsah vjsdshdvajdv asdhvaddas d asdas dhasddjsd adasdva shdvasda sdvasdsv dasdvasdv  as da shgvd asdgdd bdu DdhDHDDJdJ DJDVhdKHDd DVkdHDVakd HDVdhvcDKHVd" 
      ></BlogCard>
      
<BlogCard
        title="title of the blog irst title title first bla vla bla te first title is suposed ito be a large one "
        authorname="ansh"
        publishedAt="13 aug"
        shortTitle="Node js"
        content="kdgas ydfadfdadf asjsvasdjhdy dasjdv a jdfsah vjsdshdvajdv asdhvaddas d asdas dhasddjsd adasdva shdvasda sdvasdsv dasdvasdv  as da shgvd asdgdd bdu DdhDHDDJdJ DJDVhdKHDd DVkdHDVakd HDVdhvcDKHVd" 
      ></BlogCard>
      
<BlogCard
        title="title of the blog irst title title first bla vla bla te first title is suposed ito be a large one "
        authorname="ansh"
        publishedAt="13 aug"
        shortTitle="Node js"
        content="kdgas ydfadfdadf asjsvasdjhdy dasjdv a jdfsah vjsdshdvajdv asdhvaddas d asdas dhasddjsd adasdva shdvasda sdvasdsv dasdvasdv  as da shgvd asdgdd bdu DdhDHDDJdJ DJDVhdKHDd DVkdHDVakd HDVdhvcDKHVd" 
      ></BlogCard>
      
<BlogCard
        title="title of the blog irst title title first bla vla bla te first title is suposed ito be a large one "
        authorname="ansh"
        publishedAt="13 aug"
        shortTitle="Node js"
        content="kdgas ydfadfdadf asjsvasdjhdy dasjdv a jdfsah vjsdshdvajdv asdhvaddas d asdas dhasddjsd adasdva shdvasda sdvasdsv dasdvasdv  as da shgvd asdgdd bdu DdhDHDDJdJ DJDVhdKHDd DVkdHDVakd HDVdhvcDKHVd" 
      ></BlogCard>
      </div>
    </div>
  )
}
