import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
	const FeaturedEvents = getFeaturedEvents();

	return (
		<div className="container mx-auto py-20">
			<EventList items={FeaturedEvents} />
		</div>
	);
}

export default HomePage;
