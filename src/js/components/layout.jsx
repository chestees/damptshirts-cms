'use strict';

var React = require( 'react' );

var Navigation = require( './navigation.jsx' );

var Layout = React.createClass( {

	render: function () {

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

						</article>
					</div>
				</main>
			</div>
		);

	}

} );

module.exports = Layout;
