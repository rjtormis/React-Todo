import Card from './shared/Card';
function All({ data }) {
	// @todo - Add styles
	return (
		<div className="mt-3">
			<h1>All Task!</h1>
			<div className="task-container">
				{data.map((item) => (
					<Card key={item.id} task={item.task} tags={item.tags} priority={item.priority} date={item.date} />
				))}
			</div>
		</div>
	);
}

export default All;
