import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// Main Components
import Headers from './components/Headers';
import Home from './components/Home';
import New from './components/New';
import All from './components/All';
import Footer from './components/Footer';

function App() {
	// @todo - Move data to useContext
	const [data, setData] = useState([]);

	const newTask = (task) => {
		setData([task, ...data]);
	};
	return (
		<Router>
			<Headers />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new" element={<New create={newTask} />} />
					<Route path="/all" element={<All data={data} />} />
				</Routes>
			</div>

			<Footer />
		</Router>
	);
}

export default App;
