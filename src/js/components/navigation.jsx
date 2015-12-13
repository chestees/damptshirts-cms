'use strict';

var React = require( 'react' );
var Router = require( 'react-router' );
var Link = Router.Link;

var Navigation = React.createClass( {

	render: function () {

		return (
			<div className="btn-group-vertical side-navigation affix" role="group">
				<Link to="app" className="btn btn-default"><span className="glyphicon glyphicon-home" aria-hidden="true"></span> Home</Link>
				<Link to="add" className="btn btn-default"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add</Link>
			</div>
		);
	}
} );

module.exports = Navigation;
