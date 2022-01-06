// import { getFeaturedEvents } from "../dummy-data";
import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/event-list";
import Head from "next/head";
import NewletterRegistration from "../components/input/newsletter-registration";

function HomePage(props) {
	// const FeaturedEvents = getFeaturedEvents();
	const FeaturedEvents = props.events;

	return (
		<>
			<Head>
				<title>Events App</title>
				{/* Note: Meta description is shown by search engines. */}
				<meta
					name="description"
					content="Find a lot of great events that will allow you to get some great experience!"
				/>
			</Head>
			<NewletterRegistration />
			<EventList items={FeaturedEvents} />
		</>
	);
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
