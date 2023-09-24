require('dotenv').config();
const { ServiceBusClient } = require('@azure/service-bus');
const destinationList = require('./destinations.json');

module.exports.start = async () => {
	console.log('---------------------- START ----------------------');

	const queueName = process.env.AZURE_SERVICE_BUS_TOPIC_NAME;
	const connectionString = process.env.AZURE_SERVICE_BUS_CONNECTION_STRING;
	const mailSubject = process.env.MAIL_SUBJECT;
	const sendGridTemplateId = process.env.MAIL_SENDGRID_TEMPLATE_ID;

	// This message payload will be sent to our Azure Service Bus topic
	// The interpretation of this message is reponsibility of our system that sends e-mails via sendgrid.
	for (const destination of destinationList) {
		const messagePayload = {
			templateId: sendGridTemplateId,
			name: destination.name,
			email: destination.email,
			subject: mailSubject,
			isSandBox: false,
		};
		await publishMessageToQueue(queueName, connectionString, messagePayload);
		console.log(`${destination.email} sent`);
	}
	console.log('----------------------- END -----------------------');
};

async function publishMessageToQueue(queue, connectionString, messagePayload) {
	const sbClient = new ServiceBusClient(connectionString);
	try {
		const sender = sbClient.createSender(queue);
		const message = {
			body: messagePayload,
		};
		await sender.sendMessages(message);
		await sender.close();
	} catch (error) {
		throw error;
	} finally {
		await sbClient.close();
	}
}
