import PropTypes from 'prop-types';
function Image({ className, src, width, height }) {
	return <img className={className} src={src} width={width} height={height} />;
}

Image.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
};
export default Image;
