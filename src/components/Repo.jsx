import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

const Repo = ({ user }) => {
	return (
		<li className='mb-10 ms-7'>
			<span
				className='absolute flex items-center justify-center w-6 h-6 bg-blue-100
			rounded-full -start-3 ring-8 ring-white'
			>
				<FaCodeBranch className='w-5 h-5 text-blue-800' />
			</span>
			<div className='flex gap-2 items-center flex-wrap'>
				<a

					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-2 text-lg font-semibold'
				>
					{user.name}
				</a>
				<span
					className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
					py-0.5 rounded-full flex items-center gap-1'
				>
					<FaRegStar /> {user.likeCount}
				</span>

			</div>

			<time
				className='block my-1 text-xs font-normal leading-none
			 text-gray-400'
			>
				{user.uploadedAt}
			</time>
			<p className='mb-4 text-base font-normal text-gray-500'>Type - {user.type}</p>

			<p className='mb-4 text-base font-bold text-gray-500'>Owner - {user.uploadedBy}</p>

		</li >
	);
};

export default Repo;