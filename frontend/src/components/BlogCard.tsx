interface BlogInp {
  authorname: string;
  publishedAt: string;
  title: string;
  content: string;
  shortTitle?: string;
}

export default function ({
  authorname,
  publishedAt,
  title,
  content,
  shortTitle,
}: BlogInp) {
  return (
    <div className=" border w-2/3 justify-around">
      <div className="flex flex-col">
        <div className="flex">
         <div className="m-2 text-base font-normal"> {authorname}</div>
          <div className="mt-2 text-slate-600">{publishedAt}</div>
        </div>
        <div className="font-bold text-lg mx-2">{title}</div>
        <div className="text-slate-700 mx-2 text-balance w-1/2"> {`${content.slice(0, content.length/2)}`} </div>
        <div className="flex flex-row mt-4">
          <div className="mx-3 ">{shortTitle}</div>
          <div className="text-slate-500">{`${Math.ceil(content.length / 100)} min read`}</div>
        </div>
      </div>
    </div>
  );
}
