import { useRef, useState } from "react";

function NewComment(props) {
	const [isInvalid, setIsInvalid] = useState(false);

	const emailInputRef = useRef();
	const nameInputRef = useRef();
	const commentInputRef = useRef();

	function sendCommentHandler(event) {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredName = nameInputRef.current.value;
		const enteredComment = commentInputRef.current.value;

		if (
			!enteredEmail ||
			enteredEmail.trim() === "" ||
			!enteredEmail.includes("@") ||
			!enteredName ||
			enteredName.trim() === "" ||
			!enteredComment ||
			enteredComment.trim() === ""
		) {
			setIsInvalid(true);
			return;
		}

		props.onAddComment({
			email: enteredEmail,
			name: enteredName,
			text: enteredComment
		});
	}

	return (
		<form
			className="my-8 mx-auto w-full rounded-md bg-[#03be9f] shadow-xl p-4"
			onSubmit={sendCommentHandler}
		>
			<div className="flex gap-4 flex-wrap">
				<div className="mb-2 flex-1 min-w-[10rem]">
					<label
						className="block font-bold mb-2 text-white text-left"
						htmlFor="email"
					>
						Your email
					</label>
					<input
						className="text-inherit p-2 rounded border w-full bg-[#dcfff9]"
						type="email"
						id="email"
						ref={emailInputRef}
					/>
				</div>
				<div className="mb-2 flex-1 min-w-[10rem]">
					<label
						className="block font-bold mb-2 text-white text-left"
						htmlFor="name"
					>
						Your name
					</label>
					<input
						className="text-inherit p-2 rounded border w-full bg-[#dcfff9]"
						type="text"
						id="name"
						ref={nameInputRef}
					/>
				</div>
			</div>
			<div className="mb-2 flex-1 min-w-[10rem]">
				<label
					className="block font-bold mb-2 text-white text-left"
					htmlFor="comment"
				>
					Your comment
				</label>
				<textarea
					className="text-inherit p-2 rounded border w-full bg-[#dcfff9]"
					id="comment"
					rows="5"
					ref={commentInputRef}
				></textarea>
			</div>
			{isInvalid && (
				<p>Please enter a valid email address and comment!</p>
			)}
			<button className="bg-white px-4">Submit</button>
		</form>
	);
}

export default NewComment;
