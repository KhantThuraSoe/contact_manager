import * as React from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { HiOutlinePhone } from 'react-icons/hi';
import { contact } from '../../redux/features/contactSlice';
interface PropsType {
	contact: contact;
}
export default function Contact({ contact }: PropsType): JSX.Element {
	const { id, name, phone, email, address, image } = contact;
	return (
		<li className="flex flex-row items-center justify-between px-2 py-2 my-3 bg-blue-100 rounded-lg">
			<section className="flex flex-row items-center justify-center gap-4">
				<img
					src={image}
					alt="profile_image"
					className="w-[40px] h-[40px] rounded-full"
				/>
				<section className="flex flex-col items-center justify-between">
					<h3 className="text-[.75rem]">{name}</h3>
					<section className="text-[.75rem] py-1 flex flex-row gap-1 items-baseline justify justify-center">
						<HiOutlinePhone className="flex items-end justify-center text-red-500 scale-125" />
						<p className="w-full text-gray-400">{phone}</p>
					</section>
				</section>
			</section>
			<section className="flex flex-row items-center justify-center gap-1">
				<FiEdit className="cursor-pointer" />
				<MdDeleteForever size={'22px'} className="cursor-pointer" />
			</section>
		</li>
	);
}
