import Tags from './Tags';
import NewTaskForm from './NewTaskForm';
function New() {
	return (
		<>
			<div className="newTask mt-3 text-center">
				<h1>&#128640;Add New Task! &#10024;</h1>
			</div>
			<div className="row">
				<div className="col-7 offset-3">
					<NewTaskForm />
				</div>
			</div>
		</>
	);
}

export default New;
