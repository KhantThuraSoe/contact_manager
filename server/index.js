import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import { v4 as uuid } from 'uuid';

const contacts = [
	{
		_id: uuid(),
		name: 'Khant Thura Soe',
		phone: '09788763412',
		email: '1234@gmail.com',
		address: 'No.41,DawPone township,Yangon',
		// image: profile,
	},
	{
		_id: uuid(),
		name: 'Aung Aung',
		phone: '09788763412',
		email: '1234@gmail.com',
		address: 'No.21,Hlaing township,Yangon',
		// image: profile,
	},
	{
		_id: uuid(),
		name: 'Myo Kyaw',
		phone: '09788763412',
		email: '1234@gmail.com',
		address: 'No.41, township,Mandalay',
		// image: profile,
	},
];

const startServer = async () => {
	const typeDefs = gql`
		type Contact {
			_id: ID!
			name: String!
			phone: String!
			email: String
			address: String
		}
		type Query {
			contacts: [Contact!]!
			contact(id: ID!): Contact!
		}
		type Mutation {
			addContact(contactInput: ContactInput): Contact!
		}
		input ContactInput {
			name: String!
			phone: String!
			email: String
			address: String
		}
	`;
	const resolvers = {
		Query: {
			contacts: () => contacts,
			contact: (parent, { id }, context) => {
				return contacts.find((contact) => contact._id === id);
			},
		},
	};

	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
	});

	await apolloServer.start();
	const app = express();
	app.use(cors());
	app.use(express.json());
	apolloServer.applyMiddleware({ app });

	app.use((req, res) => res.send('Hello World!'));
	app.listen(4000, () => {
		console.log(`Express Apollo Server is running on port ${4000}`);
	});
};
startServer();
