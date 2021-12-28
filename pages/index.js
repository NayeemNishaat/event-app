import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
	const FeaturedEvents = getFeaturedEvents();

	return <EventList items={FeaturedEvents} />;
}

export default HomePage;
