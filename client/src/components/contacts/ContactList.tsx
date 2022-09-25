import React from 'react';
import Contact from './Contact';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store/store';
export default function ContactList(): JSX.Element {
	const contacts = useSelector((state: RootState) => state.contact.value);
	return (
		<ul className="my-8">
			{contacts.map((contact) => (
				<Contact key={contact.id} contact={contact} />
			))}
		</ul>
	);
}
