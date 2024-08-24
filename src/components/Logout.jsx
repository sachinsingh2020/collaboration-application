import { MdLogout } from "react-icons/md";
import {Link} from 'react-router-dom'
// TODO Implement Logout functionality

const Logout = () => {
	return (
		<>
		<Link to='/logi'>
		<img
				src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
				className='w-10 h-10 rounded-full border border-gray-800'
			/>
		</Link>
			

			<div className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800'>
				<MdLogout size={22} />
			</div>
		</>
	);
};

export default Logout;