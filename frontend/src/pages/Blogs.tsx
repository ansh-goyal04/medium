import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function Blogs() {
  interface Blog {
    title: string;
    authorName: string;
    publishedAt: string;
    topic: string;
    content: string;
    id: string;
  }

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    async function func() {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    func();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Appbar />

      {/* Blog Content */}
      <div className={`relative top-20 z-0 overflow-hidden px-2 sm:px-4 sm:top-24 md:top-28 lg:top-32 ${loading ? "":"md:grid grid-cols-3"}`}>
        {loading ? (
          <div className=" grid grid-cols-3">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="animate-pulse bg-gray-200 p-4 rounded-lg shadow-md md:m-4">
                <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              authorName={blog.authorName}
              publishedAt={blog.publishedAt}
              topic={blog.topic}
              content={blog.content}
              id={blog.id}
            />
          ))
        ) : (
          <div className="animate-pulse bg-gray-200 p-4 rounded-lg shadow-md mt-10">
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
          </div>
        )}
      </div>
    </div>
  );
}

