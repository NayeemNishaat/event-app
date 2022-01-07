import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head";
import { NotificationContextProvider } from "../store/notification-context";

// Note: It is the root component which runs for each page that is displayed in the browser All pages are child of this component. Remark: It is the component that renders at first. Point: It is rendered inside the body like this <body> <app /> </body>!
function MyApp({ Component, pageProps }) {
	return (
		<NotificationContextProvider>
			<Layout>
				{/* Remark: Global Head. NextJs auto merge Heads and resolves cinflicts by simply taking the last declaration of the same tag with the same attribute as the final tag to show. */}
				<Head>
					{/* Point: General title and description. It will be overwritten if the later rendered components have the same tags with the same attributes. */}
					<title>Next Events</title>
					<meta name="description" content="A NextJs Events App" />
					<meta
						name="viewport"
						content="initial-scale=1.0,width=device-width"
					/>
				</Head>
				<Component {...pageProps} />
			</Layout>
		</NotificationContextProvider>
	);
}

export default MyApp;
