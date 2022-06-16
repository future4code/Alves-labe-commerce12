import React, { Component } from "react";
import ProductCards from "./components/Products/ProductCards";
import ShoppingCartItem from "./components/ShoppingCart/ShoppingCartItem";

import { AppContainer } from "./Style";
import { GlobalStyle } from "./Global";
import Filter  from "./components/Filter/Filter";

export default class App extends Component {
	render() {
		return (
			<AppContainer>
				<GlobalStyle />
				<ProductCards />
				<ShoppingCartItem/>
				<Filter/>
			</AppContainer>
			
		);
	}
}
