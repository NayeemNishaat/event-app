import { useRef, useContext } from "react";
import NotificationContext from "../../store/notification-context";

function NewsletterRegistration() {
	const emailInputRef = useRef();
	const notificationCtx = useContext(NotificationContext);

	function registrationHandler(event) {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;

		notificationCtx.showNotification({
			title: "Signing Up...",
			message: "Registering for newsletter!",
			status: "pending"
		});

		fetch("/api/newsletter", {
			method: "POST",
			body: JSON.stringify({ email: enteredEmail }),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((response) => {
				if (response.ok) return response.json();

				return response.json().then((data) => {
					throw new Error(data.message) || "Something went wrong!";
				});
			})
			.then(() =>
				notificationCtx.showNotification({
					title: "Success!",
					message: "Successfully registered for newsletter!",
					status: "success"
				})
			)
			.catch((err) =>
				notificationCtx.showNotification({
					title: "Error!",
					message: err.message || "Something went wrong!",
					status: "error"
				})
			);
	}

	return (
		<section className="my-12 mx-auto w-[90%] max-w-xs">
			<h2 className="text-center font-bold text-2xl text-purple-700">
				Sign up to stay updated!
			</h2>
			<form onSubmit={registrationHandler}>
				<div className="flex gap-4 mt-4">
					<input
						className="text-inherit p-1 rounded border flex-1"
						type="email"
						id="email"
						placeholder="Your email"
						aria-label="Your email"
						ref={emailInputRef}
					/>
					<button className="bg-[#03be9f] border rounded-md text-[#dafff7]  text-inherit px-4 cursor-pointer hover:bg-[02afa1] border-[#02afa1]">
						Register
					</button>
				</div>
			</form>
		</section>
	);
}

export default NewsletterRegistration;
