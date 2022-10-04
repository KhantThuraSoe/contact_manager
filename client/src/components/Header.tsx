import * as React from 'react';
import AddContactModel from './dialogBoxs/AddContactModel';
import { AiOutlineUserAdd } from 'react-icons/ai';
function Header(): JSX.Element {
	const [show, setShow] = React.useState(false);
	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		e.stopPropagation();
		setShow(true);
	}
	return (
		<header className="w-full px-[20px] py-[15px] flex items-center justify-between">
			<h2 className=" text-lg font-[900]">Contacts</h2>
			<button
				className="border-none outline-none bg-green-500 text-white p-2 rounded-full cursor-pointer hover:bg-[#000] duration-300"
				onClick={handleClick}
			>
				<AiOutlineUserAdd />
			</button>
			{show ? <AddContactModel setShow={setShow} /> : null}
		</header>
	);
}
export default Header;
