import { Blog } from "../hooks"
import { Appbar } from "./Appbar"

export const Fullblog = ({blog} : {blog: Blog}) => {
    return <div>
<Appbar />
   
   <div className="flex justify-center">

     <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
        <div className=" col-span-8">
            <div className="text-3xl font-extrabold">
                {blog.title}
            </div>
            <div className="text-slate-500 pt-2"> posted on 2nd dec</div>
            <div className="pt-4">
                {blog.content}
            </div>
        </div>
        <div className="bg-green-300 col-span-4">
            {blog.author.name || "Anonymous"}
        <div>
            random catych phrase to grab users attention
        </div>
        </div>
        </div>
    </div>
   </div>
}