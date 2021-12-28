import Button from "../../components/ui/button";
import { useRef } from "react";

function EventsSearch(props) {
	const yearInputRef = useRef();
	const monthInputRef = useRef();

	function submitHandler(e) {
		e.preventDefault();

		const selecteYear = yearInputRef.current.value;
		const selecteMonth = monthInputRef.current.value;

		props.onSearch(selecteYear, selecteMonth);
	}

	return (
		<form
			onSubmit={submitHandler}
			className="mx-auto my-8 shadow-xl p-4 bg-white rounded-lg w-[80%] max-w-2xl flex justify-between gap-4"
		>
			<div className=" flex flex-1 gap-4 ">
				<div className="w-2/5 flex gap-4 items-center justify-between">
					<label className="font-bold" htmlFor="year">
						Year
					</label>
					<select
						className="bg-white rounded-lg w-3/4 p-1 ring-2 outline-none"
						name="year"
						id="year"
						ref={yearInputRef}
					>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
					</select>
				</div>
				<div className="w-2/5 flex gap-4 items-center justify-between">
					<label htmlFor="month">Month</label>
					<select
						className="bg-white rounded-lg w-3/4 p-1 ring-2 outline-none"
						name="month"
						id="month"
						ref={monthInputRef}
					>
						<option value="1">January</option>
						<option value="2">February</option>
						<option value="3">March</option>
						<option value="4">April</option>
						<option value="5">May</option>
						<option value="6">June</option>
						<option value="7">July</option>
						<option value="8">August</option>
						<option value="9">September</option>
						<option value="10">October</option>
						<option value="11">November</option>
						<option value="12">December</option>
					</select>
				</div>
			</div>

			<Button>Find Events</Button>
		</form>
	);
}

export default EventsSearch;
