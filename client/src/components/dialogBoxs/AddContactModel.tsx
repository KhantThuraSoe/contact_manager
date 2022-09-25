import * as React from 'react';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaAddressBook } from 'react-icons/fa';
import { FcAddImage } from 'react-icons/fc';

export interface Props {
	setShow: (arg: boolean) => void;
}

export default function AddContactModel({ setShow }: Props) {
	const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setShow(false);
	};
	const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};
	return (
		<section className="fixed top-0 left-0 w-screen h-screen text-[.75rem] bg-[rgba(0,0,0,0.5)] z-10 flex items-center justify-center">
			<article className="w-auto h-auto px-4 py-4 bg-white rounded-tr-[2rem] rounded-bl-[2rem]">
				<form className="flex flex-col gap-4">
					<section className="flex flex-row gap-2">
						<label htmlFor="name">
							<BsFillPersonFill className="h-full scale-150" />
						</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Enter name..."
							className="w-full px-2 py-1 bg-blue-100 rounded-md"
						/>
					</section>
					<section className="flex flex-row gap-2">
						<label htmlFor="phone">
							<BsFillTelephoneFill className="h-full scale-150" />
						</label>
						<input
							type="text"
							name="phone"
							id="phone"
							placeholder="Enter phone number..."
							className="w-full px-2 py-1 bg-blue-100 rounded-md"
						/>
					</section>
					<section className="flex flex-row gap-2">
						<label htmlFor="email">
							<MdEmail className="h-full scale-150" />
						</label>
						<input
							type="text"
							id="email"
							name="email"
							placeholder="Enter email..."
							className="w-full px-2 py-1 bg-blue-100 rounded-md"
						/>
					</section>
					<section className="flex flex-row gap-2">
						<label htmlFor="address">
							<FaAddressBook className="translate-y-[30%] scale-150" />
						</label>
						<textarea
							id="address"
							name="address"
							placeholder="Enter address..."
							rows={3}
							cols={10}
							className="w-full px-2 py-1 bg-blue-100 rounded-md"
						></textarea>
					</section>
					<section className="flex flex-row gap-2">
						<label htmlFor="imageFile">
							<FcAddImage className="h-full scale-150" />
						</label>
						<input type="file" name="imageFile" id="imageFile" />
					</section>
					<section className="flex flex-row gap-4 mx-auto">
						<button
							type="submit"
							className="px-4 py-1 text-white duration-300 bg-green-500 border-none rounded-full outline-none hover:bg-green-300 hover:text-black"
							onClick={handleAdd}
						>
							Add
						</button>
						<button
							type="reset"
							className="px-2 py-1 text-white duration-300 bg-black border-none rounded-full outline-none hover:bg-[#575757]"
							onClick={handleCancel}
						>
							Cancel
						</button>
					</section>
				</form>
			</article>
		</section>
	);
}
