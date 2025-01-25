import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { useNavigate } from "react-router-dom";

interface BlogInp {
  authorName: string;
  publishedAt: string;
  title: string;
  content: string;
  topic?: string;
  id: string;
}

export default function BlogCard({
  authorName,
  publishedAt,
  title,
  content,
  topic,
  id,
}: BlogInp) {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden cursor-pointer m-5" onClick={() => navigate(`/blog?id=${id}`)}>
      <CardContent className="p-4">
        {topic && (
          <Badge variant="secondary" className="mb-2">
            {topic}
          </Badge>
        )}
        <h2 className="text-xl font-semibold mb-2 hover:underline">{title}</h2>
        <p className="text-muted-foreground mb-4">{`${content.slice(0, 300)}...`}</p>
      </CardContent>
      <CardFooter className="bg-muted p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${authorName}`} />
            <AvatarFallback>
              {authorName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{authorName}</p>
            <p className="text-xs text-muted-foreground">{publishedAt}</p>
          </div>
        </div>
        <span className="text-xs text-muted-foreground">{`${Math.ceil(content.length / 800)} min read`}</span>
      </CardFooter>
    </Card>
  );
}


//   return (
//     <div className="border-b-2 w-full sm:w-4/5 md:w-2/3 lg:w-1/2 mx-auto border-slate-100 z-0 px-3">
//       <div className="p-4">
//         <div className="flex items-center space-x-2">
//           <div className="border rounded-full ring-1 h-6 w-6 flex items-center justify-center bg-slate-100 ring-offset-slate-100 text-xs">
//             {authorName.toUpperCase().charAt(0)}
//           </div>
//           <div className="text-sm font-medium">{authorName}</div>
//           <div className="text-slate-600 text-xs">{publishedAt}</div>
//         </div>
//         <div
//           className="font-extrabold text-lg sm:text-xl mt-2 cursor-pointer hover:underline text-wrap break-words"
//           onClick={() => navigate(`/blog?id=${id}`)}
//         >
//           {title}
//         </div>
//         <div className="text-slate-700 mt-2 text-sm sm:text-base break-words font-serif">
//           {`${content.slice(0, 300)} ...`}
//         </div>
//         <div className="flex mt-4 justify-between items-center">
//           <div className="flex flex-wrap gap-2">
//             {topic && (
//               <div className="rounded-full py-1 px-3 bg-slate-100 text-xs sm:text-sm">
//                 {topic}
//               </div>
//             )}
//             <div className="text-slate-500 text-xs sm:text-sm">
//               {`${Math.ceil(content.length / 800)} min read`}
//             </div>
//           </div>
//           <div className="cursor-pointer">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="w-4 h-4 sm:w-5 sm:h-5"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// interface BlogPost {
//   id: number
//   title: string
//   author: string
//   date: string
//   excerpt: string
//   readTime: string
//   image: string
//   category: string
// }

// interface BlogCardProps {
//   post: BlogPost
// }

// export default function BlogCard({ post }: BlogCardProps) {
  
// }

