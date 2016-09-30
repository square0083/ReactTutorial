import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-inverse navbar-static-top">
					<a className="navbar-brand" href="#">Project name</a>
					<ul className="nav nav-pills">
						<li className="nav-item active">
							<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/tutorial">Tutorial</Link>							
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Contact</a>
						</li>
					</ul>
				</nav>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}
