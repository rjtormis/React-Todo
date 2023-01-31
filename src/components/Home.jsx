import Image from './shared/Image';
import logo from './assets/logo512.png';
import meme from './assets/react-meme.jpg';

function Home() {
	return (
		<div className="row mt-5">
			<div className="col-4 d-flex justify-content-center">
				<Image className="spin" src={logo} width={500} />
			</div>
			<div className="col-8">
				<h1 className="text-center">A SIMPLE REACT TODO</h1>

				<div className="p-3">
					<h2 className="mb-2">Motivation</h2>
					<p>
						A Simple React Todo Application that performs basic <strong>CRUD</strong> on tasks. The main purpose of this
						small project is to broaden my skillset with regards to Front-end Development by using JavaScript Framework,
						Sepcifically React.
					</p>
					<div className="meme d-flex justify-content-center">
						<Image src={meme}></Image>
					</div>
				</div>
			</div>
			{/* <div className="">
				<div className="">
					
				</div>
			</div> */}
		</div>
	);
}

export default Home;
