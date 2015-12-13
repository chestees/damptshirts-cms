'use strict';

var React = require( 'react' );
var Router = require( 'react-router' );
var routes = require( './router/router' );

Router.run( routes, Router.HistoryLocation, function( Handler ) {
	React.render( <Handler />, document.getElementById( 'app' ) );
} );
