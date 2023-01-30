import logo from './assets/logo192.png';

// Share Components
import Anchor from './shared/Anchor';
import Buttons from './shared/Buttons';
import Image from './shared/Image';
import Span from './shared/Span';

function Headers() {
	return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
			<div className="container-fluid">
				<Anchor className="navbar-brand">
					<Image className="d-inline-block align-text-top" src={logo} width="30" height="30" />
					Simple React Todo!
				</Anchor>
				<Buttons
					className="navbar-toggler"
					type="button"
					toggle="collapse"
					target="#navbarNavAltMarkup"
					control="navbarNavAltMarkup"
					expanded="false"
					label="Toggle navigation">
					<Span className="navbar-toggler-icon" />
				</Buttons>

				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Anchor className="nav-link">Home</Anchor>
						<Anchor className="nav-link">New</Anchor>
						<Anchor className="nav-link">All task</Anchor>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Headers;
