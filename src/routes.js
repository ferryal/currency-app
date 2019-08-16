import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CurrencyRate from './schenes/CurrencyRate';

class Routes extends Component {
render() {
    return(
			<div>
				<Switch>
					<Route exact path="/" component={CurrencyRate}/>
					<Redirect to="/" />
				</Switch>
			</div>
    );
	}
}

export default Routes;