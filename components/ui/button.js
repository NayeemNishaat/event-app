import Link from "next/link";

function Button(props) {
	return (
		<Link href={props.link}>
			<a className="p-3 bg-pink-700 text-white rounded-3xl inline-block font-bold">
				{props.children}
			</a>
		</Link>
	);
}

export default Button;
