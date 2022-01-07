import { useEffect, useState, useContext } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import NotificationContext from "../../store/notification-context";

function Comments(props) {
	const { eventId } = props;

	const notificationCtx = useContext(NotificationContext);

	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState([]);
	const [isFetchingComments, setIsFetchingComments] = useState(false);

	useEffect(() => {
		if (showComments) {
			setIsFetchingComments(true);

			fetch("/api/comments/" + eventId)
				.then((response) => response.json())
				.then((data) => {
					setComments(data.comments);
					setIsFetchingComments(false);
				});
		}
	}, [showComments]);

	function toggleCommentsHandler() {
		setShowComments((prevStatus) => !prevStatus);
	}

	function addCommentHandler(commentData) {
		notificationCtx.showNotification({
			title: "Working...",
			message: "Storing comment!",
			status: "pending"
		});

		fetch("/api/comments/" + eventId, {
			method: "POST",
			body: JSON.stringify(commentData),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((response) => {
				if (response.ok) return response.json();
				return response.json((data) => {
					throw new Error(data.message || "Something went wrong!");
				});
			})
			.then(() =>
				notificationCtx.showNotification({
					title: "Success!",
					message: "Comment is saved!",
					status: "success"
				})
			)
			.catch((err) => {
				notificationCtx.showNotification({
					title: "Error!",
					message: err.message || "Something went wrong!",
					status: "error"
				});
			});
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
			{showComments && !isFetchingComments && (
				<CommentList items={comments} />
			)}
			{showComments && isFetchingComments && <p>Loading...</p>}
		</section>
	);
}

export default Comments;
