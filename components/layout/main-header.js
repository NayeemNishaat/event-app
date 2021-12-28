import Link from "next/link";

function MainHeader() {
	return (
		<header className="flex px-32 h-20 items-center mx-auto justify-between text-cyan-300 bg-gray-900">
			<div>
				<Link href="/">
					<a className="text-4xl">NxtEvents</a>
				</Link>
			</div>
			<nav>
				<div>
					<ul>
						<li>
							<Link href="/events">
								<a className="text-xl">All Events</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default MainHeader;
