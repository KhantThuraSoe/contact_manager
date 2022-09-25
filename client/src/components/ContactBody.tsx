import * as React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BiUpArrow } from 'react-icons/bi';
import ContactList from './contacts/ContactList';

export default function ContactBody(): JSX.Element {
	return (
		<main>
			<section className="px-[20px]">
				<section className="w-full bg-gray-100 mx-auto flex flex-row px-2 py-1 rounded-full">
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
				<button className="absolute bottom-8 right-4 p-3 rounded-full bg-green-600 text-white cursor-pointer hover:scale-125 duration-300">
					<BiUpArrow className="translate-y-[-6%]" />
				</button>
			</section>
		</main>
	);
}
