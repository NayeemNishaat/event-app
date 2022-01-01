import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import { getFilteredEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";

// Important: The slug only kicks in if there are more than one dynamic segment in the URL!
function FilteredEventsPage(props) {
	const [loadedEvents, setLoadedEvents] = useState();
	const router = useRouter();
	const filteredData = router.query.slug;

	useEffect(() => {
		// Remark: Suboptimal because filtering in the server is the best approach!
		fetch(
			"https://nextjs-prerendering-27c46-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
		)
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					const events = [];
					for (const key in data) {
						events.push({
							id: key,
							...data[key] // Note: Populating the array with objects!
						});
					}
					setLoadedEvents(events);
				}
			});
	}, []);

	if (!loadedEvents) {
		return (
			<>
				<p className="text-center text-4xl py-20">Loading!</p>;
				<div className="text-center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}
	const year = +filteredData[0];
	const month = +filteredData[1];

	if (
		isNaN(year) ||
		isNaN(month) ||
		year > 2030 ||
		year < 2021 ||
		month < 1 ||
		month > 12
	) {
		return (
			<>
				<p className="text-center text-4xl py-20">Invalid Filter!</p>;
				<div className="text-center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}

	const filteredEvents = loadedEvents.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year &&
			eventDate.getMonth() === month - 1
		);
	});

	// const filteredEvents = props.events;

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<p className="text-center text-4xl py-20">No Events Found!</p>
				<div className="text-center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}

	// const date = new Date(props.date.year, props.date.month - 1);
	const date = new Date(year, month - 1);

	return (
		<>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</>
	);
}

// Note: For slugs generally is better!
// export async function getServerSideProps(context) {
// 	const { params } = context;
// 	const filteredData = params.slug;

// 	const year = +filteredData[0];
// 	const month = +filteredData[1];

// 	if (
// 		isNaN(year) ||
// 		isNaN(month) ||
// 		year > 2030 ||
// 		year < 2021 ||
// 		month < 1 ||
// 		month > 12
// 	) {
// 		return {
// 			props: {
// 				hasError: true
// 			}
// 			// Point: Alternatives
// 			// notFound: true
// 			// redirect:{
// 			// 	destination:"/error"
// 			// }
// 		};
// 	}

// 	const filteredEvents = await getFilteredEvents({ year, month });

// 	return {
// 		props: {
// 			events: filteredEvents,
// 			date: {
// 				year,
// 				month
// 			}
// 		}
// 	};
// }

export default FilteredEventsPage;
