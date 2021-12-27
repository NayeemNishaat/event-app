import Button from "../ui/button";

const EventItem = (props) => {
	const { title, image, date, location, id } = props;

	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});

	const formattedAddress = location.replace(", ", "\n");

	const exploreLink = `/events/${id}`;

	return (
		<li className="flex justify-center rounded-xl overflow-hidden mb-10 last:mb-0 shadow-2xl">
			<div className="w-2/5">
				<img src={`/${image}`} alt={title} />
			</div>
			<div className="w-3/5 p-5">
				<div>
					<h1 className="text-3xl font-bold">{title}</h1>
					<div className="flex items-center gap-1">
						<div>
							<svg className="w-6 h-6">
								<use xlinkHref="/images/sprite.svg#icon-location"></use>
							</svg>
						</div>
						<time className="font-bold text-gray-800">
							{humanReadableDate}
						</time>
					</div>
					<div className="flex items-center gap-1">
						<div>
							<svg className="w-6 h-6">
								<use xlinkHref="/images/sprite.svg#icon-calender"></use>
							</svg>
						</div>
						<address className="whitespace-pre-wrap mt-2 font-semibold text-gray-600">
							{formattedAddress}
						</address>
					</div>
				</div>
				<div className="text-right">
					<Button link={exploreLink}>Explore Event</Button>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
