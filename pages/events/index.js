import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "./events-search";
import { useRouter } from "next/router";

function AllEventsPage() {
	const allEvents = getAllEvents();
	const router = useRouter(); // Remark: All react hooks ned to be called in the first level!

	function findEventsHandler(year, month) {
		router.push(`/events/${year}/${month}`);
	}

	return (
		<>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={allEvents} />
		</>
	);
}

export default AllEventsPage;
