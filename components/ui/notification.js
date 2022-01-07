import { useContext } from "react";
import NotificationContext from "../../store/notification-context";

const Notification = function (props) {
	const notificationCtx = useContext(NotificationContext);

	const notificationClasses =
		"fixed bottom-0 h-20 w-full bg-[#1b1b1b] flex justify-between items-center text-white py-2 px-[10%] shadow-xl";

	const { title, message, status } = props;

	let statusClasses = "";

	if (status === "success") {
		statusClasses = "bg-[#10be58]";
	}

	if (status === "error") {
		statusClasses = "bg-[#e65035]";
	}

	if (status === "pending") {
		statusClasses = "bg-[#177cbe]";
	}

	const activeClasses = `${notificationClasses} ${statusClasses}`;
	console.log(statusClasses);
	return (
		<div
			className={activeClasses}
			onClick={notificationCtx.hideNotification}
		>
			<h2 className="m-0 text-xl text-white">{title}</h2>
			<p>{message}</p>
		</div>
	);
};

export default Notification;
