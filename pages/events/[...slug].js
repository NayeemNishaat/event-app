import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";

// Important: The slig only kicks in if there are more than one dynamic segment in the URL!

function FilteredEventsPage() {
	const router = useRouter();

	const filteredData = router.query.slug;

	if (!filteredData) {
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

	const filteredEvents = getFilteredEvents({ year, month });

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

	const date = new Date(year, month - 1);

	return (
		<>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</>
	);
}

export default FilteredEventsPage;
