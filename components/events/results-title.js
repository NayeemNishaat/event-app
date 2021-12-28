import Button from "../ui/button";

function ResultsTitle(props) {
	const { date } = props;

	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		month: "long",
		year: "numeric"
	});

	return (
		<section className="mx-auto my-8 w-[90%] max-w-2xl text-center">
			<h1 className="text-lg font-semibold mb-4">
				Events in {humanReadableDate}
			</h1>
			<Button link="/events">Show all events</Button>
		</section>
	);
}

export default ResultsTitle;
