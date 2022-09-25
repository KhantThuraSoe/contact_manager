import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import profile from '../../assets/blank.png';
export interface contact {
	id: string;
	name: string;
	phone: string;
	email: string;
	address: string;
	image?: string;
}

export interface initialStateType {
	value: contact[];
}
const initialState = {
	value: [
		{
			id: uuid(),
			name: 'Khant Thura Soe',
			phone: '09788763412',
			email: '1234@gmail.com',
			address: 'No.41,DawPone township,Yangon',
			image: profile,
		},
		{
			id: uuid(),
			name: 'Aung Aung',
			phone: '09788763412',
			email: '1234@gmail.com',
			address: 'No.21,Hlaing township,Yangon',
			image: profile,
		},
		{
			id: uuid(),
			name: 'Myo Kyaw',
			phone: '09788763412',
			email: '1234@gmail.com',
			address: 'No.41, township,Mandalay',
			image: profile,
		},
	],
};
const contactSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact: (state, actions) => {
			state.value.push(actions.payload);
		},
		deleteContact: (state, actions) => {
			state.value.filter((contact) => actions.payload.id !== contact.id);
		},
		editContact: (state, actions) => {
			state.value.find((contact) => actions.payload.id === contact.id);
		},
	},
});
export const { addContact, deleteContact, editContact } = contactSlice.actions;
export default contactSlice.reducer;
