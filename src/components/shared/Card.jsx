import { useState } from 'react';
import { FcHighPriority, FcLowPriority, FcMediumPriority } from 'react-icons/fc';
function Card({ task, priority, tags, date }) {
	const setColor = (prior) => {
		return prior === 'High Priority'
			? 'red'
			: prior === 'Medium Priority'
			? 'yellow'
			: prior === 'Low Priority'
			? 'green'
			: '';
	};
	const setType = (prior) => {
		return prior === 'High Priority' ? (
			<FcHighPriority size={35} />
		) : prior === 'Medium Priority' ? (
			<FcMediumPriority size={35} />
		) : prior === 'Low Priority' ? (
			<FcLowPriority size={35} />
		) : (
			''
		);
	};

	return (
		<div className="card-component">
			<div className="cardc-type">{setType(priority)}</div>
			<div className="cardc-title" style={{ color: 'white' }}>
				<b>{task.toUpperCase()}</b>
			</div>
			<div className="cardc-body">
				<div className="task-details">
					<p className="mb-0 d-flex" style={{ color: 'white' }}>
						Priority:
						<p className="mb-0" style={{ marginLeft: '5px', color: setColor(priority) }}>
							{priority}
						</p>
					</p>
					<p className="mb-0 d-flex" style={{ color: 'white' }}>
						Tags:
						<p className="mb-0" style={{ marginLeft: '5px' }}>
							{tags}
						</p>
					</p>
					<p className="mb-0 d-flex" style={{ color: 'white' }}>
						Date:
						<p className="mb-0" style={{ marginLeft: '5px' }}>
							{date}
						</p>
					</p>
				</div>
				<div className="task-buttons">
					<button className="btn btn-warning">EDIT</button>
					<button className="btn btn-success">DONE</button>
				</div>
			</div>
		</div>
	);
}

export default Card;
