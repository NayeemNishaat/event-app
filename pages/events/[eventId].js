// import { useRouter } from "next/router";
// import { getEventById } from "../../dummy-data";
import EventContent from "../../components/event-detail/event-content";
import Comments from "../events/../../components/input/comments";
import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import Head from "next/head";

function EventDetailPage(props) {
	// const router = useRouter();
	// const eventId = router.query.eventId;
	// const event = getEventById(eventId);
	const event = props.selectedEvent;

	// Note: Fallback condition for fallback = true because initiall async event is undefined and we can not read data of undefined!
	if (!event) {
		return <p className="text-center">Loading...</p>;
	}

	return (
		<>
			<Head>
				<title>{event.title}</title>
				<meta name="description" content={event.description} />
			</Head>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
			<Comments eventId={event.id} />
		</>
	);
}
// Note: We are not using user specific data or data that needs to update multiple times in a second. Hence getStaticProps is our guy here!
export async function getStaticProps(context) {
	const eventId = context.params.eventId;

	const event = await getEventById(eventId);

	if (!event) return { notFound: true };

	return {
		props: {
			selectedEvent: event
		},
		revalidate: 30
	};
}

export async function getStaticPaths() {
	const events = await getFeaturedEvents();

	const paths = events.map((event) => ({
		params: {
			eventId: event.id
		}
	}));

	return {
		paths: paths,
		fallback: true // Important: Some events might not be pregenerated. because only featured events are defined. Hence, fallback is true.
	};
}

export default EventDetailPage;
