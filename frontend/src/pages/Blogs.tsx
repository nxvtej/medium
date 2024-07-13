import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks";
import { Skeleton } from "../components/Skeleton";

export const Blogs = () => {
	const { loading, blogs } = useBlogs();

	if (loading) {
		return (
			<div>
				<Appbar />
				<div className='flex justify-center'>
					<div>
						<Skeleton />
						<Skeleton />
						<Skeleton />
					</div>
				</div>
			</div>
		);
	}
	return (
		<div>
			<Appbar />
			<div className='flex justify-center'>
				<div className=''>
					{/* @ts-expect-error */}
					{blogs.map((blog) => (
						<BlogCard
							id={blog.id}
							authorName={blog.author.name || "Anonymous"}
							title={blog.title}
							content={blog.content}
							published={"2nd Feb 2024"}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
