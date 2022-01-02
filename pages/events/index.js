// import { getAllEvents } from "../../dummy-data";
import { getAllEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/event-list";
import EventsSearch from "./events-search";
import { useRouter } from "next/router";
import Head from "next/head";

function AllEventsPage(props) {
	// const allEvents = getAllEvents();
	const router = useRouter(); // Remark: All react hooks ned to be called in the first level!

	const { events } = props;

	function findEventsHandler(year, month) {
		router.push(`/events/${year}/${month}`);
	}

	return (
		<>
			<Head>
				<title>All Current Events</title>
				<meta
					media="description"
					content="Find a lot of great events that will allow you to Rule."
					key="1" // Note: Different key can be used to allow both of the tags. If keys are same only the last tag will be rendered.
				/>
			</Head>
			<Head>
				<title>All Events</title>
				<meta
					media="description"
					content="Find a lot of great events that will allow you to grow."
					key="1"
				/>
			</Head>
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
