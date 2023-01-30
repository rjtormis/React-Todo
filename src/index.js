import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from 'jquery';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';

// React 18
// Must import ReactDOM from 'react-dom/client'/
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
