import Tags from './Tags';
function NewTaskForm() {
	return (
		<form>
			<div className="title">
				<label htmlFor="title" className="form-label">
					<b>Task Name</b>
				</label>
				<input type="text" className="form-control" id="title" name="New[title]" />
			</div>
			<Tags />
			<div className="d-flex flex-column">
				<label htmlFor="" className="form-label">
					<b>Date</b>
				</label>
				<input type="date" name="" id="" className="form-control" />
			</div>
		</form>
	);
}

export default NewTaskForm;
