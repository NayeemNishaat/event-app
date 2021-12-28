function EventContent(props) {
	return (
		<section className="text-2xl text-gray-600 w-[90%] max-w-2xl mx-auto mt-32 text-center">
			{props.children}
		</section>
	);
}

export default EventContent;
