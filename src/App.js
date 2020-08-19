import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Refill from './pages/Refill';
import Compounding from './pages/Compounding';
import Consultation from './pages/Consultation';
import Testing from './pages/Testing';
import './App.css';

const App = () => {
	return (
		// <div className="site">
		// 	Compounding Pharmacy Associates and Consultants is owned and operated by Geneva Chen, Pharm.D, Ph.D. Dr. Chen has had extensive training in pharmacy compounding and consulting, and has also worked as a research scientist and pharmacy college professor. She is highly dedicated to her patients and practice, working closely with physicians and patients to achieve excellent results for each custom-made prescription.
		// </div>
		<BrowserRouter>
			<Switch>
				<Route path='/refill' component={Refill} />
				<Route path='/compounding' component={Compounding} />
				<Route path='/consultation' component={Consultation} />
				<Route path='/testing' component={Testing} />
				<Route component={Home} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;