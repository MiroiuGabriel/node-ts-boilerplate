import { config as loadEnvVariables } from 'dotenv';
import { MongoClient } from 'mongodb';
import { startServer } from './server';
loadEnvVariables();

export const initMongoClient = () => {
	const uri = process.env.MONGO_ADDRESS;
	console.log('Mongo address: ', uri);
	if (!uri) {
		throw new Error('Please specify a mongo connection string.');
	}

	const client = new MongoClient(uri);

	return client.connect();
};

const main = async () => {
	const mongoClient = await initMongoClient();
	await startServer(mongoClient);
};

console.log('Starting up...');
main();
