import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  return (
    <div>
      <BlogCard
        title="title of the blog irst title title first bla vla bla te first title is suposed ito be a large one "
        authorname="ansh"
        publishedAt="13 aug"
        shortTitle="Node js"
        content="kdgas ydfadfdadf asjsvasdjhdy dasjdv a jdfsah vjsdshdvajdv asdhvaddas d asdas dhasddjsd adasdva shdvasda sdvasdsv dasdvasdv  as da shgvd asdgdd bdu DdhDHDDJdJ DJDVhdKHDd DVkdHDVakd HDVdhvcDKHVd" 
      ></BlogCard>
    </div>
  );
}
