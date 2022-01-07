import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
	notification: null,
	showNotification: function (notificationData) {},
	hideNotification: function () {}
});

export function NotificationContextProvider(props) {
	const [activeNotification, setActiveNotification] = useState();

	useEffect(() => {
		if (activeNotification && activeNotification.status !== "pending") {
			const timer = setTimeout(() => {
				setActiveNotification(null);
			}, 3000);

			return () => clearTimeout(timer); // Remark: must be inside if block else useEffect will do nothing!
		}
	}, [activeNotification]);

	function showNotificationHandler(notificationData) {
		setActiveNotification(notificationData);
	}

	function hideNotificationHandler() {
		setActiveNotification(null);
	}

	const context = {
		notification: activeNotification,
		showNotification: showNotificationHandler,
		hideNotification: hideNotificationHandler
	};

	return (
		<NotificationContext.Provider value={context}>
			{props.children}
		</NotificationContext.Provider>
	);
}
export default NotificationContext;
