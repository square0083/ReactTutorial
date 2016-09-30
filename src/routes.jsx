import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import errorHandler from './utils/errorHandler';
import App from './app';

import Tutorial from './views/Tutorial';

function appendTrailingSlash(nextState, replaceState) {
	let lastChar = nextState.location.pathname.slice(-1);
	if (lastChar !== '/') {
		replaceState(nextState, nextState.location.pathname + '/');
	}
}

let routes = (
	<Router history={hashHistory}>
		<Route path="/" component={errorHandler(App)}>
			<Route path="/tutorial" component={errorHandler(Tutorial)}>
			</Route>
		</Route>
	</Router>
)

export default routes;
