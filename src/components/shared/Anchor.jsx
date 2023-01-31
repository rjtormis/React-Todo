import PropTypes from 'prop-types';

// @todo - convert to Navigate Hook
//       - temporary solution
function Anchor({ children, className, href }) {
	return (
		<a className={className} href="">
			{children}
		</a>
	);
}

Anchor.defaultProps = {
	href: '#',
};

Anchor.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	href: PropTypes.string,
};

export default Anchor;
