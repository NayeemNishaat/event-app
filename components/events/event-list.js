import EventItem from "./event-item";

function EventList(props) {
	const { items } = props;

	return (
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
	);
}

export default EventList;
