// import { getFeaturedEvents } from "../dummy-data";
import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/event-list";

function HomePage(props) {
	// const FeaturedEvents = getFeaturedEvents();
	const FeaturedEvents = props.events;

	return <EventList items={FeaturedEvents} />;
}

export async function getStaticProps() {
	const FeaturedEvents = await getFeaturedEvents();

	return {
		props: {
			events: FeaturedEvents
		},
		revalidate: 1800
	};
}

export default HomePage;
