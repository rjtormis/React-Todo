import PropTypes from 'prop-types';

function Span({ children, className }) {
	return <span className={className}>{children}</span>;
}

Span.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default Span;
