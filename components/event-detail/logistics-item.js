function LogisticsItem(props) {
	const { icon } = props;

	return (
		<li className="flex text-2xl items-center flex-col text-center text-gray-200 md:items-start md:text-left">
			<span className="block mr-4">
				<svg className="w-6 h-6 stroke-cyan-500">
					<use xlinkHref={`/images/sprite.svg#${icon}`}></use>
				</svg>
			</span>
			<span className="block">{props.children}</span>
		</li>
	);
}

export default LogisticsItem;
