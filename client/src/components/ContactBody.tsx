import * as React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BiUpArrow } from 'react-icons/bi';
import ContactList from './contacts/ContactList';

export default function ContactBody(): JSX.Element {
	return (
		<main>
			<section className="px-[20px]">
				<section className="flex flex-row w-full px-2 py-1 mx-auto bg-gray-100 rounded-full">
					<BiSearch className="h-auto my-auto" />
					<input
						type="text"
						placeholder="Search..."
						className="pl-2 border-none outline-none bg-transparent text-[.75rem] h-full w-full"
					/>
				</section>
				<article>
					<ContactList />
				</article>
				<button className="absolute p-3 text-white duration-300 bg-green-600 rounded-full cursor-pointer bottom-8 right-4 hover:scale-125">
					<BiUpArrow className="translate-y-[-6%]" />
				</button>
			</section>
		</main>
	);
}
