import { useRef } from "react";

function NewsletterRegistration() {
	const emailInputRef = useRef();

	function registrationHandler(event) {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;

		fetch("/api/newsletter", {
			method: "POST",
			body: JSON.stringify({ email: enteredEmail }),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
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
