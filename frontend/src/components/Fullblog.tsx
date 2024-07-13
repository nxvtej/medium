import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const Fullblog = ({ blog }: { blog: Blog }) => {
	return (
		<div>
			<Appbar />

			<div className='flex justify-center'>
				<div className='grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12'>
					<div className=' col-span-8'>
						<div className='text-3xl font-extrabold'>{blog.title}</div>
						<div className='text-slate-500 pt-2'> posted on 2nd dec</div>
						<div className='pt-4'>{blog.content}</div>
					</div>
					<div className='col-span-4'>
						<div className='text-slate-600 text-lg'>Author</div>
						<div className='flex'>
							<div className='pr-3 flex flex-col justify-center'>
								<Avatar name={blog.author.name || "Anonymous"} size='big' />
							</div>
							<div>
								<div className='text-xl font-bold'>
									{blog.author.name || "Anonymous"}
								</div>
								<div className='pt-2 text-slate-500'>
									random catych phrase to grab users attention
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
