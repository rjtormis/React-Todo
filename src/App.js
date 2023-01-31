import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Main Components
import Headers from './components/Headers';
import Home from './components/Home';
import New from './components/New';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<Headers />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new" element={<New />} />
				</Routes>
			</div>

			<Footer />
		</Router>
	);
}

export default App;
