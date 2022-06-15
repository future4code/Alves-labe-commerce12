import React, { Component } from "react";
import ProductCards from "./components/Products/ProductCards";

import { AppContainer } from "./Style";
import { GlobalStyle } from "./Global";

export default class App extends Component {
	render() {
		return (
			<AppContainer>
				<GlobalStyle />
				<ProductCards />
			</AppContainer>
		);
	}
}
