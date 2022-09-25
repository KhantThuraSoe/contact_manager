import * as React from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { HiOutlinePhone } from 'react-icons/hi';
import profile from '../../assets/blank.png';
export interface ContactProps {}

export default function Contact(props: ContactProps): JSX.Element {
	return (
		<li className="px-2 py-2 rounded-lg bg-blue-100 my-3 flex flex-row items-center justify-between">
			<section className="flex flex-row items-center justify-center gap-4">
				<img
					src={profile}
					alt="profile_image"
					className="w-[30px] h-[30px] rounded-full"
				/>
				<section className="flex flex-col items-center justify-between">
					<h3 className="text-[.75rem]">Khant Thura Soe</h3>
					<section className="text-[.75rem] py-1 flex flex-row gap-1 items-baseline justify-center">
						<HiOutlinePhone className="flex items-end justify-center scale-125 text-red-500" />
						<p className="w-full text-gray-400">09788763415</p>
					</section>
				</section>
			</section>
			<section className="flex flex-row gap-1 items-center justify-center">
				<FiEdit className="cursor-pointer" />
				<MdDeleteForever size={'22px'} className="cursor-pointer" />
			</section>
		</li>
	);
}
