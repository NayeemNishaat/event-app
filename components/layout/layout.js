import MainHeader from "./main-header";
import Head from "next/head";
import { useContext } from "react";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";

function Layout(props) {
	const notificationCtx = useContext(NotificationContext);

	const activeNotification = notificationCtx.notification;

	return (
		<>
			<Head>
				<title>Next Events</title>
			</Head>
			<MainHeader />
			<main>{props.children}</main>
			{activeNotification && (
				<Notification
					title={activeNotification.title}
					message={activeNotification.message}
					status={activeNotification.status}
				/>
			)}
		</>
	);
}

export default Layout;
