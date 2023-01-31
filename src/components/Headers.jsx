import logo from './assets/logo192.png';

// Share Components
import Anchor from './shared/Anchor';
import Buttons from './shared/Buttons';
import Image from './shared/Image';
import Span from './shared/Span';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';

function Headers() {
	return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
			<div className="container-fluid">
				<Anchor className="navbar-brand">
					<Image className="d-inline-block align-text-top" src={logo} width={30} height={30} />
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
						<NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
							Home
						</NavLink>
						<NavLink to="/new" className="nav-link">
							New Task
						</NavLink>
						<NavLink to="/all" className="nav-link">
							All Task
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Headers;
