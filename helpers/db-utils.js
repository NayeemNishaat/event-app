import { MongoClient } from "mongodb";

export async function connectDatabase() {
	const client = await MongoClient.connect(
		"mongodb+srv://Nayeem:VAfiGViTHlBWDCPg@laby.il75o.mongodb.net/nextEvents?retryWrites=true&w=majority"
	);

	return client;
}

export async function insertDocument(client, collection, document) {
	// client.db("lAbY")
	const db = client.db(""); // Note: We can omit the db name.
	return await db.collection(collection).insertOne(document); // Remark: Collection -> table in sql! Document -> Entry
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
	const db = client.db();

	const documents = await db
		.collection(collection)
		.find(filter)
		.sort(sort) // Note: -1 -> Descending +1 -> Ascending!
		.toArray();

	return documents;
}
