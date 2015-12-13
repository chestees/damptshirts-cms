'use strict';

var React = require( 'react' );
var Router = require( 'react-router' );
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
	<Route name="app" path="/" handler={ require( '../components/app.jsx' ) }>
		<DefaultRoute handler={ require( '../components/homepage.jsx' ) }/>
		<Route name="add" handler={ require( '../components/add.jsx' ) }/>
	</Route>
);

module.exports = routes;
