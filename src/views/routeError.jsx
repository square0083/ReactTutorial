import React from 'react';

export default class RouteError extends React.Component {
	render() {
		return (
			<div className="alert alert-block alert-error">
				<div style={{fontSize: 24, marginBottom: 10}}>
					<span>Oops! Something went wrong</span>
				</div>
			</div>
		);
	}
}
