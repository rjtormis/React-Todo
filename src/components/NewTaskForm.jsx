import Priority from './Priority';
import Tags from './Tags';
import Buttons from './shared/Buttons';
import { useState } from 'react';
function NewTaskForm({ create }) {
	const [date, setDate] = useState('');
	const [task, setTask] = useState('');
	const [priority, setPriority] = useState('');
	const [tags, setTags] = useState('');

	const handleTaskChange = (e) => {
		setTask(e.target.value);
	};
	const handleDateChange = (e) => {
		setDate(e.target.value);
	};

	const handleSubmit = (e) => {
		const id = Math.floor(Math.random() * 50);
		e.preventDefault();
		const newTask = {
			id,
			task,
			priority,
			tags,
			date,
		};
		create(newTask);
	};
	const printMe = (e) => {
		console.log(tags);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="title">
				<label onClick={printMe} htmlFor="title" className="form-label">
					<b>Task Name</b>
				</label>
				<input onChange={handleTaskChange} type="text" className="form-control" id="title" name="New[title]" />
			</div>
			<Priority select={(priority) => setPriority(priority)} />
			<Tags select={(tags) => setTags(tags)} />
			<div className="d-flex flex-column">
				<label htmlFor="" className="form-label">
					<b>Date</b>
				</label>
				<input onChange={handleDateChange} type="date" name="" id="" className="form-control" />
			</div>
			<div className="btnContainer d-flex justify-content-end">
				<Buttons className="btn btn-outline-success mt-3" type="submit">
					CREATE!
				</Buttons>
			</div>
		</form>
	);
}

export default NewTaskForm;
