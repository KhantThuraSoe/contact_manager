import * as React from 'react';
import Contact from './Contact';
export interface IContactListProps {}

export default function ContactList(): JSX.Element {
	return (
		<ul className="my-5">
			<Contact />
			<Contact />
			<Contact />
		</ul>
	);
}
