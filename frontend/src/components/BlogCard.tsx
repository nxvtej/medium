import { Link } from "react-router-dom";

interface BlogCardProps {
	authorName: string;
	title: string;
	content: string;
	published: string;
    id: string
}
export const BlogCard = ({
	authorName,
	title,
	content,
	published,
    id
}: BlogCardProps) => {
	return (
        <Link to={`/blog/${id}`}>
		<div className='p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer'>
			<div className='flex'>
				<Avatar name={authorName} size="small" />
				<div className='font-extralight pl-2 text-sm flex flex-col justify-center'>
					{authorName}
				</div>
				<div className='flex flex-col justify-center pl-2 flex flex-col justify-center'>
					<Circle />
				</div>
				<div className=' flex flex-col justify-center pl-2 font-thin text-slate-500 text-sm'>
					{published}
				</div>
			</div>
			<div className='text-xl font-semibold pt-2'>{title}</div>
			<div className='text-md font-thin'>{content.slice(0, 100) + "..."}</div>

			<div className='text-slate-500 font-thin text-sm pt-4'>
				{`${Math.ceil(content.length / 100)} minute(s)
        read`}
			</div>
		</div>
        </Link>
	);
};

function Circle() {
	return <div className='h-1 w-1 rounded-full dark:bg-gray-600'></div>;
}

export function Avatar({ name, size="small" }: { name: string, size: "small" | "big" }) {
	return (
		<div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
			<span className={`font-extralight text-gray-600 dark:text-gray-300 ${size === "small" ? "text-xs" : "text-md"}`}>
				{name[0]}
			</span>
		</div>
	);
}
