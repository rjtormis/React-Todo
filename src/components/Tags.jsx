import { FcHighPriority, FcLowPriority, FcMediumPriority } from 'react-icons/fc';
function Tags() {
	return (
		<div className="priority mt-3 text-center ">
			<div className="form-check form-check-inline">
				<input
					class="form-check-input"
					type="radio"
					name="inlineRadioOptions"
					id="highPriority"
					value="High Priority"
				/>
				<label class="form-check-label d-flex" for="highPriority">
					<FcHighPriority size={25} />
					<h5 className="mx-2"> High Priority</h5>
				</label>
			</div>
			<div className="form-check form-check-inline">
				<input
					class="form-check-input"
					type="radio"
					name="inlineRadioOptions"
					id="mediumPriority"
					value="Medium Priority"
				/>
				<label class="form-check-label d-flex" for="mediumPriority">
					<FcMediumPriority size={25} />
					<h5 className="mx-2"> Medium Priority</h5>
				</label>
			</div>
			<div className="form-check form-check-inline">
				<input class="form-check-input" type="radio" name="inlineRadioOptions" id="lowPriority" value="Low Priority" />
				<label class="form-check-label d-flex" for="lowPriority">
					<FcLowPriority size={25} />
					<h5 className="mx-2"> Low Priority</h5>
				</label>
			</div>
		</div>
	);
}

export default Tags;
