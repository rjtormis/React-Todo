import PropTypes from 'prop-types';

import { FcReading, FcWorkflow } from 'react-icons/fc';

function Tags({ select }) {
	//@todo - Move to useContext Hook!
	const handleTags = (e) => {
		select(e.target.value);
	};
	return (
		<div className="Tags mt-3 text-center">
			<div className="form-check form-check-inline">
				<input
					onClick={handleTags}
					className="form-check-input"
					type="radio"
					name="New[tags]"
					id="Personal"
					value="Personal"
				/>
				<label className="form-check-label d-flex" htmlFor="Personal">
					<FcReading size={25} />
					<h5 className="mx-2"> Personal</h5>
				</label>
			</div>
			<div className="form-check form-check-inline">
				<input onClick={handleTags} className="form-check-input" type="radio" name="New[tags]" id="Work" value="Work" />
				<label className="form-check-label d-flex" htmlFor="Work">
					<FcWorkflow size={25} />
					<h5 className="mx-2">Work</h5>
				</label>
			</div>
		</div>
	);
}

Tags.defaultProps = {
	select: () => null,
};
Tags.propTypes = {
	select: PropTypes.func,
};

export default Tags;
