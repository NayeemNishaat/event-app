import MainHeader from "./main-header";
import Head from "next/head";

function Layout(props) {
	return (
		<>
			<Head>
				<title>Next Events</title>
			</Head>
			<MainHeader />
			<main>{props.children}</main>
		</>
	);
}

export default Layout;
