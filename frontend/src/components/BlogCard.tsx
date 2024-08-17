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
    <div className=" border w-2/3 justify-around m-auto">
      <div className="p-4">
        <div className="flex">
          <div className="border rounded-full p">A</div>
         <div className="m-2 text-base font-normal"> {authorname}</div>
          <div className="mt-2 text-slate-600">{publishedAt}</div>
        </div>
        <div className="font-extrabold text-xl mx-2 cursor-pointer hover:underline w-2/3 text-pretty break-all mb-2">{title}</div>
        <div className="text-slate-700 mx-2 text-pretty w-2/3 break-all font-serif text-sm"> {`${content.slice(0, 900)} ...`} </div>
        <div className="flex flex-row mt-4 " >
          <div className="mx-3 border rounded-full py-1 px-3 bg-slate-100 text-sm">{shortTitle}</div>
          <div className="text-slate-500 text-sm py-1">{`${Math.ceil(content.length / 100)} min read`}</div>
        </div>
      </div>
    </div>
  );
}
