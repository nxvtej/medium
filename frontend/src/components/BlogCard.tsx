
interface BlogCardProps {
    authorName: string, 
    title: string, 
    content: string,
    published: string
}
export const BlogCard = ({
    authorName,
    title,
    content,
    published,
}: BlogCardProps) => {
  return (
    <div>
        <div className="flex">
            <div className="flex flex-col justify-center">

            <Avatar name={authorName}/>
            </div>
            <div className="font-extralight pl-2">{authorName}</div>
            <div className="flex flex-col justify-center pl-2">
                <Circle />
            </div>
            <div className="pl-2 font-thin text-slate-500">
            {published}
            </div>
        </div>
        <div className="text-xl font-semibold">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0, 100)+"..."}
        </div>

        <div>
        {`${Math.ceil(content.length / 100)}minutes`}
        </div>

        <div className="bg-slate-200 h-1 w-full"></div>
    </div>
  )
}


function Circle() {
    return <div className="h-1 w-1 rounded-full dark:bg-gray-600">
    </div>
}

function Avatar ({name} : {name: string}) {
    return <div className="relative inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="text-xs font-extralight text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
    
}