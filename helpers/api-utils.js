// Important: It is not ideal to fetch all the events. Here for demo purpose only!
export async function getAllEvents() {
	const response = await fetch(
		"https://nextjs-prerendering-27c46-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
	);
	const data = await response.json();

	const events = [];
	for (const key in data) {
		events.push({
			id: key,
			...data[key] // Note: Populating the array with objects!
		});
	}

	return events;
}

export async function getFeaturedEvents() {
	const allEvents = await getAllEvents();

	return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
	const allEvents = await getAllEvents();
	return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
	const { year, month } = dateFilter;
	const allEvents = await getAllEvents();

	let filteredEvents = allEvents.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year &&
			eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}
