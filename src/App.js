import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Refill from './pages/Refill';
import Compounding from './pages/Compounding';
import Consultation from './pages/Consultation';
import Testing from './pages/Testing';
import Navigation from './Navigation';
import Footer from './Footer';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route path='/refill' component={Refill} />
				<Route path='/compounding' component={Compounding} />
				<Route path='/consultation' component={Consultation} />
				<Route path='/testing' component={Testing} />
				<Route component={Home} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;