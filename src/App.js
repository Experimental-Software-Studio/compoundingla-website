import React, {useEffect, Fragment} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Home from './pages/Home';
import Refill from './pages/Refill';
import Compounding from './pages/Compounding';
import Consultation from './pages/Consultation';
import Testing from './pages/Testing';
import Navigation from './Navigation';
import Footer from './Footer';
import Immunization from './pages/Immunization/Immunization';

const App = ({history}) => {
	useEffect(() => {
		const unlisten = history.listen(() => {
			window.scrollTo(0,0);
		})
		return () => {
			unlisten();
		}
	}, [history])
	return (
		<Fragment>
			<Navigation />
			<Switch>
				<Route path='/refill' component={Refill} />
				<Route path='/compounding' component={Compounding} />
				<Route path='/immunization' component={Immunization} />
				<Route path='/consultation' component={Consultation} />
				<Route path='/testing' component={Testing} />
				<Route component={Home} />
			</Switch>
			<Footer />
		</Fragment>
	);
}

export default withRouter(App);