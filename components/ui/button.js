import Link from "next/link";

function Button(props) {
	if (props.link) {
		return (
			<Link href={props.link}>
				<a className="p-3 bg-pink-700 text-white rounded-3xl inline-block font-bold">
					{props.children}
				</a>
			</Link>
		);
	}

	return (
		<button
			className="py-3 px-8 bg-blue-700 text-white rounded-3xl inline-block font-bold"
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}

export default Button;
