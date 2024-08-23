interface BlogInp {
  authorName: string;
  publishedAt: string;
  title: string;
  content: string;
  topic?: string;
  id:String
}
import { useNavigate } from "react-router-dom";

export default function ({
  authorName,
  publishedAt,
  title,
  content,
  topic,
  id
}: BlogInp) 
{
 const navigate=useNavigate();
  return (
    <div className=" border-b-2 w-2/3 justify-around m-auto border-slate-100 z-0 ">
      <div className="p-4">
        <div className="flex mx-2 my-2">
          <div className="border rounded-full ring-1 h-6 w-6 flex justify-center bg-slate-100  ring-offset-slate-100">
            <div>{authorName.toUpperCase().charAt(0)}</div>
          </div>
          <div className="mx-2 text-sm font-medium"> {authorName}</div>
          <div className="mr-2 text-slate-600 text-sm">{publishedAt}</div>
        </div>
        <div
          className="font-extrabold text-xl mx-2 cursor-pointer hover:underline w-2/3 text-wrap break-all mb-2"
          onClick={()=>{
            navigate('/blog?id='+id)
          }}
        >
          {title}
        </div>
        <div className="text-slate-700 mx-2 text-pretty w-2/3 break-all font-serif text-sm">
          {" "}
          {`${content.slice(0, 900)} ...`}{" "}
        </div>
        <div className="flex mt-4 justify-between w-2/3">
          <div className="flex flex-row">
            <div className="mx-3 rounded-full py-1 px-3 bg-slate-100 text-sm">
              {topic}
            </div>
            <div className="text-slate-500 text-sm py-1">{`${Math.ceil(
              content.length / 100
            )} min read`}</div>
          </div>
          <div className="cursor-pointer pointer-events-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
