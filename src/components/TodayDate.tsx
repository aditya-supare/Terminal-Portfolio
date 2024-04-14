export default function TodayDate() {
	const renderDate = () => {
		const date = new Date();
		return date.toDateString();
	};
	return (
		<div>
			<h1>Is Today {renderDate()} ?</h1>
		</div>
	);
}
