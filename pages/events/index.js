// import { getAllEvents } from "../../dummy-data";
import { getAllEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/event-list";
import EventsSearch from "./events-search";
import { useRouter } from "next/router";

function AllEventsPage(props) {
	// const allEvents = getAllEvents();
	const router = useRouter(); // Remark: All react hooks ned to be called in the first level!

	const { events } = props;

	function findEventsHandler(year, month) {
		router.push(`/events/${year}/${month}`);
	}

	return (
		<>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</>
	);
}

export async function getStaticProps() {
	const events = await getAllEvents();

	return {
		props: { events },
		revalidate: 60
	};
}

export default AllEventsPage;
