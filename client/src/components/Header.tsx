import * as React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
function Header(): JSX.Element {
	return (
		<header className="w-full px-[20px] py-[10px] flex items-center justify-between">
			<h2 className=" text-lg font-[900]">Contacts</h2>
			<button className="border-none outline-none bg-[#13a100] text-white p-2 rounded-full cursor-pointer hover:bg-[#939191] duration-300">
				<AiOutlineUserAdd />
			</button>
		</header>
	);
}
export default Header;
