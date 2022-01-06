import { useEffect, useState } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";

function Comments(props) {
	const { eventId } = props;

	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		if (showComments) {
			fetch("/api/comments/" + eventId)
				.then((response) => response.json())
				.then((data) => {
					setComments(data.comments);
				});
		}
	}, [showComments]);

	function toggleCommentsHandler() {
		setShowComments((prevStatus) => !prevStatus);
	}

	function addCommentHandler(commentData) {
		fetch("/api/comments/" + eventId, {
			method: "POST",
			body: JSON.stringify(commentData),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	}

	return (
		<section className="mx-auto my-12 w-[90%] max-w-2xl text-center">
			<button
				className="text-inherit rounded-md py-2 px-4 bg-transparent text-[#03be9f] border cursor-pointer hover:bg-[#dcfff9]"
				onClick={toggleCommentsHandler}
			>
				{showComments ? "Hide" : "Show"} Comments
			</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && <CommentList items={comments} />}
		</section>
	);
}

export default Comments;
