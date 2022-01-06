function CommentList(props) {
	const { items } = props;

	return (
		<ul className="flex flex-col gap-4">
			{items.map((item) => (
				<li className="text-left px-0 py-2 border-b-2" key={item._id}>
					<p>{item.text}</p>
					<div className="text-right italic">
						By <address className="inline">{item.name}</address>
					</div>
				</li>
			))}
		</ul>
	);
}

export default CommentList;
