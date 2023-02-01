import PropTypes from 'prop-types';
import { FcHighPriority, FcLowPriority, FcMediumPriority } from 'react-icons/fc';

function Priority({ select }) {
	//@todo - Move to useContext Hook
	const handlePriority = (e) => {
		select(e.target.value);
	};
	return (
		<div className="priority mt-3 text-center ">
			<div className="form-check form-check-inline">
				<input
					onClick={handlePriority}
					className="form-check-input"
					type="radio"
					name="New[Priority]"
					id="highPriority"
					value="High Priority"
				/>
				<label className="form-check-label d-flex" htmlFor="highPriority">
					<FcHighPriority size={25} />
					<h5 className="mx-2"> High Priority</h5>
				</label>
			</div>
			<div className="form-check form-check-inline">
				<input
					onClick={handlePriority}
					className="form-check-input"
					type="radio"
					name="New[Priority]"
					id="mediumPriority"
					value="Medium Priority"
				/>
				<label className="form-check-label d-flex" htmlFor="mediumPriority">
					<FcMediumPriority size={25} />
					<h5 className="mx-2"> Medium Priority</h5>
				</label>
			</div>
			<div className="form-check form-check-inline">
				<input
					onClick={handlePriority}
					className="form-check-input"
					type="radio"
					name="New[Priority]"
					id="lowPriority"
					value="Low Priority"
				/>
				<label className="form-check-label d-flex" htmlFor="lowPriority">
					<FcLowPriority size={25} />
					<h5 className="mx-2"> Low Priority</h5>
				</label>
			</div>
		</div>
	);
}

Priority.defaultProps = {
	select: () => null,
};

Priority.propTypes = {
	select: PropTypes.func,
};
export default Priority;
