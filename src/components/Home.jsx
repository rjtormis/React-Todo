import Image from './shared/Image';
import logo from './assets/logo512.png';
function Home() {
	return (
		<div className="container d-flex py-3 m-5 ">
			<div className="container d-flex justify-content-center">
				<Image className="spin" src={logo} />
			</div>
			<div className="container">
				<h1 className="text-center">A SIMPLE REACT TODO</h1>
			</div>
		</div>
	);
}

export default Home;
