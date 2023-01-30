import PropTypes from 'prop-types';
// @todo - trim down the passed propertiess
function Buttons({ children, className, type, toggle, target, control, expanded, label }) {
	return (
		<button
			className={className}
			type={type}
			data-bs-toggle={toggle}
			data-bs-target={target}
			aria-controls={control}
			aria-expanded={expanded}
			aria-label={label}>
			{children}
		</button>
	);
}

Buttons.defaultProps = {
	className: 'btn',
	type: 'button',
};

Buttons.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	type: PropTypes.string,
	toggle: PropTypes.string,
	control: PropTypes.string,
	expanded: PropTypes.string,
	label: PropTypes.string,
};
export default Buttons;
