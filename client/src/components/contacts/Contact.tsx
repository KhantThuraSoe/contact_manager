import * as React from 'react';
import { FiEdit } from 'react-icons/fi';
import {
	MdDeleteForever,
	MdEmail,
	MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { HiOutlinePhone } from 'react-icons/hi';
import { contact } from '../../redux/features/contactSlice';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
interface PropsType {
	contact: contact;
}
export default function Contact({ contact }: PropsType): JSX.Element {
	const [showContactBox, setShowContactBox] = React.useState<boolean>(false);
	const { id, name, phone, email, address, image } = contact;
	const handleContactClick = (e: React.MouseEvent<HTMLLIElement>) => {
		setShowContactBox(true);
	};
	const handleX = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation();
		setShowContactBox(false);
	};
	const handleEdit = (e: React.MouseEvent<SVGElement>) => {
		e.stopPropagation();
	};
	const handleDelete = (e: React.MouseEvent<SVGElement>) => {
		e.stopPropagation();
	};
	return (
		<li
			className="flex flex-row items-center justify-between px-2 py-2 my-3 bg-green-500 rounded-lg cursor-pointer"
			onClick={handleContactClick}
		>
			<section className="flex flex-row items-center justify-center gap-4">
				<img
					src={image}
					alt="profile_image"
					className="w-[40px] h-[40px] rounded-full"
				/>
				<section className="flex flex-col items-start justify-between">
					<h3 className="text-[.75rem] font-light text-start text-black">
						{name}
					</h3>
					<section className="text-[.75rem] py-1 flex flex-row gap-1 items-baseline justify justify-center">
						<HiOutlinePhone className="flex items-end justify-center text-red-500 scale-125" />
						<p className="w-full text-gray-100">{phone}</p>
					</section>
				</section>
			</section>
			<section className="flex flex-row items-center justify-center gap-3">
				<MdOutlineKeyboardArrowRight />
			</section>
			{showContactBox ? (
				<section className="cursor-auto fixed top-0 left-0 w-screen h-screen text-[.85rem] bg-[rgba(0,0,0,0.5)] z-10 flex items-center justify-center">
					<article className="relative w-[90%] max-w-[400px] h-auto px-8 py-8 bg-white rounded-tr-[2rem] rounded-bl-[2rem]">
						<section
							className="absolute z-30 cursor-pointer top-4 right-4 "
							onClick={handleX}
						>
							<FaTimes className="w-[20px] h-[20px]" />
						</section>
						<section className="flex flex-col mx-auto">
							<img
								src={image}
								className="w-[20%] rounded-full mr-auto"
								alt="profile_photo"
							/>
							<h2 className="text-lg font-extrabold">{name}</h2>
							<section className="flex flex-col items-start justify-start w-auto gap-3 my-4">
								<h3 className="flex flex-row tracking-wider items-center gap-4 font-sans text-[1.1rem] font-extrabold text-red-400">
									<BsFillTelephoneFill />
									{phone}
								</h3>
								<h3 className="flex flex-row items-center gap-4 text-[1.1rem] text-gray-400">
									<MdEmail />
									<p className="text-[.85rem]">{email}</p>
								</h3>
								<h3 className="flex flex-row gap-4 text-[1rem] text-gray-700">
									<MdLocationOn size={'20px'} />
									<p className="text-[.8rem] font-mono">
										{address.split(',').join(', ')}
									</p>
								</h3>
							</section>
							<section className="flex flex-row items-center justify-end gap-5 mt-4">
								<FiEdit
									className="text-green-500 cursor-pointer"
									size={'18px'}
									onClick={handleEdit}
								/>
								<MdDeleteForever
									size={'22px'}
									className="text-red-600 cursor-pointer"
									onClick={handleDelete}
								/>
							</section>
						</section>
					</article>
				</section>
			) : null}
		</li>
	);
}
