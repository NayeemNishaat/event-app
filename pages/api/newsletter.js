import { MongoClient } from "mongodb";
import { connectDatabase, insertDocument } from "../../helpers/db-utils";

async function handler(req, res) {
	if (req.method === "POST") {
		const userEmail = req.body.email;
		console.log(userEmail);
		if (!(userEmail || userEmail.includes("@"))) {
			// Important: Always validate in the back-end. That's must because front-end code can be manipulated before making the request! Don't rely on front-end validation.
			res.status(422).json({ message: "422 -> Bad user input!" });
			return;
		}

		let client;
		try {
			client = await connectDatabase();
		} catch (error) {
			client.close();
			res.status(500).json({
				message: "Connecting to the database failed!"
			});
			return;
		}

		try {
			await insertDocument(client, "emails", { email: userEmail }); // Warning: Don't forget to use await for async tasks!
			client.close();
		} catch (error) {
			res.status(500).json({
				message: "Inserting data failed!"
			});
			return;
		}

		res.status(201).json({
			message: "Signed Up!"
		});
	}
}

export default handler;
