import LogisticsItem from "./logistics-item";

function EventLogistics(props) {
	const { date, address, image, imageAlt } = props;

	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	const addressText = address.replace(", ", "\n");

	return (
		<section className="shadow-2xl rounded-lg bg-gray-600 p-8 w-4/5 max-w-3xl -my-12 mx-auto text-gray-100 flex justify-between gap-4 flex-col items-center md:p-8 md:-my-14 md:gap-12 md:flex-row md:items-stretch">
			<div className="w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white object-cover">
				<img src={`/${image}`} alt={imageAlt} />
			</div>
			<ul className="md:items-start flex-1 flex gap-8 justify-center items-center flex-col">
				<LogisticsItem icon="icon-calender">
					<time>{humanReadableDate}</time>
				</LogisticsItem>
				<LogisticsItem icon="icon-location">
					<address className="whitespace-pre">{addressText}</address>
				</LogisticsItem>
			</ul>
		</section>
	);
}

export default EventLogistics;
