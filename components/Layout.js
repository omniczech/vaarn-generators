import React, { Component } from "react";
import Footer from "./footer";
import Header from "./Header";

class Layout extends Component {
	render() {
		const { children } = this.props;
		return (
			<div className="layout">
				<Header />
				{children}
				<Footer />
			</div>
		);
	}
}

export default Layout;
