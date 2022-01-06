import {
	connectDatabase,
	insertDocument,
	getAllDocuments
} from "../../../helpers/db-utils";

// Remark: Typical approach -> first build the api then create req from frontend.
async function handler(req, res) {
	const eventId = req.query.eventId;

	let client;
	try {
		client = await connectDatabase();
	} catch (error) {
		res.status(500).json({ message: "Connecting to the database failed!" });
		return;
	}

	if (req.method === "POST") {
		// Point: Add server side validation!
		const { email, name, text } = req.body;

		if (
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!text ||
			text.trim() === ""
		) {
			res.status(422).json({ message: "422 = Invalid Input" });
			return;
		}

		const newComment = {
			email,
			name,
			text,
			eventId,
			_id: null
		};

		let result;
		try {
			result = await insertDocument(client, "comments", newComment);
			newComment._id = result.insertedId;
			res.status(201).json({
				message: "Added Comment",
				Comment: newComment
			});
		} catch (error) {
			res.status(500).json({ message: "Inserting comment failed!" });
		}
	}
	if (req.method === "GET") {
		try {
			const documents = await getAllDocuments(
				client,
				"comments",
				{
					_id: -1 // Note: -1 -> Descending +1 -> Ascending!
				},
				{ eventId: eventId }
			);

			res.status(200).json({ comments: documents });
		} catch (error) {
			res.status(500).json({ message: "Getting comments failed!" });
		}
	}

	client.close();
}

export default handler;
