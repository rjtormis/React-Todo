import PropTypes from 'prop-types';
function Image({ className, src, width, height }) {
	return <img className={className} src={src} width={width} height={height} />;
}

Image.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};
export default Image;
