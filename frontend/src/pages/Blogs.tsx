import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  return (
    <div>
      <BlogCard
        title="title of the blog"
        authorname="ansh"
        publishedAt="13 aug"
        shortTitle="Node js"
        content="kdgasydfadfdadfasjsvasdjhdydasjdvajdfsahvjsdshdvajdvasdhvaddasdasdasdhasddjsdadasdvashdvasdasdvasdsvdasdvasdvasdashgvdasdgddbduDdhDHDDJdJDJDVhdKHDdDVkdHDVakdHDVdhvcDKHVd"
      ></BlogCard>
    </div>
  );
}
