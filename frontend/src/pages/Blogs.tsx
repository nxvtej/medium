import React from "react";
import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";

export const Blogs = () => {
	return (
		<div>
			<Appbar />
			<div className='flex justify-center'>
				<div className=' max-w-xl'>
					<BlogCard
						authorName={"Navdeep"}
						title={"my first blog"}
						content={
							"asfdgbfawegfbgdrGWEDVCZBGRTHEARGSFZVCXBD QNRYTJ NETDFGVNBETDFYJGNVTDFYCJG E5YTFJ EDTRFEJYGN ETYDT  YJR ERYJN ETY GETY RYJG ETYJJE Y RYJ DFJ"
						}
						published={"2nd Feb 2024"}
					/>

					<BlogCard
						authorName={"Navdeep"}
						title={"my first blog"}
						content={
							"asfdgbfawegfbgdrGWEDVCZBGRTHEARGSFZVCXBD QNRYTJ NETDFGVNBETDFYJGNVTDFYCJG E5YTFJ EDTRFEJYGN ETYDT  YJR ERYJN ETY GETY RYJG ETYJJE Y RYJ DFJ"
						}
						published={"2nd Feb 2024"}
					/>

					<BlogCard
						authorName={"Navdeep"}
						title={"my first blog"}
						content={
							"asfdgbfawegfbgdrGWEDVCZBGRTHEARGSFZVCXBD QNRYTJ NETDFGVNBETDFYJGNVTDFYCJG E5YTFJ EDTRFEJYGN ETYDT  YJR ERYJN ETY GETY RYJG ETYJJE Y RYJ DFJ"
						}
						published={"2nd Feb 2024"}
					/>

					<BlogCard
						authorName={"navdeep"}
						title={"my first blog"}
						content={
							"asfdgbfawegfbgdrGWEDVCZBGRTHEARGSFZVCXBD QNRYTJ NETDFGVNBETDFYJGNVTDFYCJG E5YTFJ EDTRFEJYGN ETYDT  YJR ERYJN ETY GETY RYJG ETYJJE Y RYJ DFJ"
						}
						published={"2nd Feb 2024"}
					/>
				</div>
			</div>
		</div>
	);
};
