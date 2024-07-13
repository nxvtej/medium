import { Circle } from "./BlogCard";

export const Skeleton = () => {
	return (
		<div>
			<div role='status' className='animate-pulse'>
				<div className='p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer'>
					<div className='flex'>
						<div className='h-3 bg-gray-200 rounded-full  w-48 max-w-[330px] mb-2.5'></div>

						<div className='font-extralight pl-2 text-sm flex flex-col justify-center'>
							<div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
						</div>
						<div className='flex flex-col justify-center pl-2 flex flex-col justify-center'>
							<Circle />
						</div>
						<div className=' flex flex-col justify-center pl-2 font-thin text-slate-500 text-sm'>
							<div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
						</div>
					</div>
					<div className='text-xl font-semibold pt-2'>
						<div className='h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5'></div>
					</div>
					<div className='text-md font-thin'>
						<div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
					</div>

					<div className='text-slate-500 font-thin text-sm pt-4'>
						<div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
					</div>
				</div>
				<div className='h-2.5 bg-gray-200 rounded-full w-48 mb-4'></div>
				<div className='h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5'></div>
				<div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>

				<div className='h-2 bg-gray-200 rounded-full max-w-[360px]'></div>
				<span className='sr-only'>Loading...</span>
			</div>
		</div>
	);
};
