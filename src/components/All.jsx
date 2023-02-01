function All({ data }) {
	// @todo - Add styles
	return (
		<div>
			<h1>All Task!</h1>
			<ul>
				{data.map((item) => (
					<li key={item.id}>
						{item.task}, {item.priority} , {item.tags} , {item.date}
					</li>
				))}
			</ul>
		</div>
	);
}

export default All;
