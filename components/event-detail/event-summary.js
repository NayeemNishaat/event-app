function EventSummary(props) {
	const { title } = props;

	return (
		<section className="w-full h-[30vh] bg-gradient-to-bl from-cyan-400 to-blue-700">
			<h1 className="m-0 pt-12 text-3xl text-center text-white md:text-6xl">
				{title}
			</h1>
		</section>
	);
}

export default EventSummary;
