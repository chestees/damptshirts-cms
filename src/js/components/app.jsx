'use strict';

var React = require( 'react' );
var ReactDom = require( 'react-dom' );
var Router = require( 'react-router' );
var RouteHandler = require( 'react-router' ).RouteHandler;

var Navigation = require( './navigation.jsx' );

var App = React.createClass( {
	render: function() {

		return (
			<div className="layout container-fluid">
				<header className="masthead affix">
					<h1>CMS</h1>
				</header>
				<main className="container-fluid">
					<div className="row">
						<aside className="col-md-2">
							<Navigation />
						</aside>
						<article className="col-md-10">
							<RouteHandler />
						</article>
					</div>
				</main>
			</div>
		);
	}
} );

module.exports = App;
