import EventItem from "./event-item";

function EventList(props) {
	const { items } = props;

	return (
		<div className="container mx-auto py-20">
			<ul className="w-3/5 mx-auto">
				{items.map((itm) => (
					<EventItem
						key={itm.id}
						id={itm.id}
						title={itm.title}
						location={itm.location}
						date={itm.date}
						image={itm.image}
					/>
				))}
			</ul>
		</div>
	);
}

export default EventList;
