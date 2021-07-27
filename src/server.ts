import express, { json } from 'express';
import Stripe from 'stripe';
import { LocationMap } from './PricingByDestination';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import axios from 'axios';

const SibApiV3Sdk = require('sib-api-v3-typescript');
// import SibApiV3Sdk from 'sib-api-v3-typescript';

export async function startServer(mongo: MongoClient) {
	const PORT = process.env.PORT || 3002;
	const stripe = new Stripe(process.env.SECRET_KEY!, {
		apiVersion: '2020-08-27',
	});
	const db = mongo.db('TaxiEcuador');
	const ordersCol = db.collection('orders');

	//email stuff

	const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

	const apiKey = apiInstance.authentications['apiKey'];
	apiKey.apiKey = process.env.SENDIN_BLUE_API_KEY;

	const partnerKey = apiInstance.authentications['partnerKey'];
	partnerKey.apiKey = process.env.SENDIN_BLUE_API_KEY;

	const app = express()
		.set('trust proxy', 1)
		.use(
			cors({
				credentials: true,
				origin: process.env.WEBSITE_URL!,
			})
		)
		.use(json({ limit: 5000000 }));

	app.post('');

	app.post(
		'/payment_hook',
		express.json({ type: 'application/json' }),
		async (req: any, res: any) => {
			const event = req.body;

			// Handle the event
			switch (event.type) {
				case 'charge.failed':
					console.log(event);
					await ordersCol.deleteOne({
						paymentMethodId: event.data.object.payment_method,
					});
					break;
				case 'charge.succeeded':
					const orderData = await ordersCol.findOne({
						paymentMethodId: event.data.object.payment_method,
					});
					const obj = LocationMap.get(orderData!.destination);
					const price = orderData!.twoWay
						? obj!.priceTwoWays
						: obj!.priceOneWay;
					if (orderData) {
						const sendToCustomer = {
							to: [
								{
									email: orderData.email,
									name: orderData.name,
								},
							],
							templateId: 3,
							params: {
								...orderData,
								receipt: event.data.object.receipt_url,
								price,
							},
							headers: {
								'X-Mailin-custom':
									'custom_header_1:custom_value_1|custom_header_2:custom_value_2',
							},
						};

						const sendToOwner = {
							to: [
								{
									email: process.env.OWNER_EMAIL,
									name: process.env.OWNER_NAME,
								},
							],
							templateId: 7,
							params: {
								...orderData,
								receipt: event.data.object.receipt_url,
								price,
							},
							headers: {
								'X-Mailin-custom':
									'custom_header_1:custom_value_1|custom_header_2:custom_value_2',
							},
						};
						try {
							await apiInstance.sendTransacEmail(sendToCustomer);
							await apiInstance.sendTransacEmail(sendToOwner);
						} catch (err) {
							console.log(err);
						}
					}
					break;
				// ... handle other event types
				default:
					console.log(`Unhandled event type ${event.type}`);
			}
		}
	);

	app.post('/billing-data', async (req: any, res: any) => {
		try {
			await ordersCol.insertOne(req.body);
			res.sendStatus(200);
		} catch (err) {
			console.log(err);
			res.status(400).send({
				message: 'Something went wrong, please try again later',
			});
		}
	});

	app.post('/payment_intents', async (req: any, res: any) => {
		try {
			const { destination, twoWay } = req.body;
			const obj = LocationMap.get(destination);
			console.log(destination, twoWay);
			if (obj) {
				const amount =
					(twoWay ? obj.priceTwoWays : obj.priceOneWay) * 100;
				const paymentIntent = await stripe.paymentIntents.create({
					amount,
					currency: 'usd',
				});
				res.status(200).send(paymentIntent.client_secret);
			} else {
				res.status(500).json({
					statusCode: 500,
					message: 'Destination not found',
				});
			}
		} catch (err) {
			console.log(err.message);
			res.status(500).json({ statusCode: 500, message: err.message });
		}
	});

	app.listen(PORT, () => {
		console.log(`Example app listening at http://localhost:${PORT}`);
	});
}
