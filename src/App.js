import React, { Component } from "react";
import ProductCards from "./components/Products/ProductCards";
import ShoppingCartItem from "./components/ShoppingCart/ShoppingCartItem";

import { AppContainer } from "./Style";
import { GlobalStyle } from "./Global";
import Filter from "./components/Filter/Filter";

import Camiseta1 from "./img/camiseta-alien.jpg";
import Camiseta2 from "./img/camiseta-nasa.jpg";
import Camiseta3 from "./img/camiseta-alien2.jpg";
import Camiseta4 from "./img/camiseta-astronauta.jpg";
import Camiseta5 from "./img/camiseta-ovni.jpg";

export default class App extends Component {
	state = {
		products: [
			{
				id: 1,
				image: Camiseta1,
				name: "Camiseta Alien",
				value: 15,
			},
			{
				id: 2,
				image: Camiseta2,
				name: "Camiseta Nasa",
				value: 45,
			},
			{
				id: 3,
				image: Camiseta3,
				name: "Camiseta Alien",
				value: 80,
			},
			{
				id: 4,
				image: Camiseta4,
				name: "Camiseta Astronauta",
				value: 130,
			},
			{
				id: 5,
				image: Camiseta5,
				name: "Camiseta Ovni",
				value: 200,
			},
		],

		filterMinValue: 50,
		filterMaxValue: 1000,
		filterName: "",
	};

	onChangeFilterMin = (e) => {
		this.setState({ filterMinValue: e.target.value });
	};

	onChangeFilterMax = (e) => {
		this.setState({ filterMaxValue: e.target.value });
	};

	onChangeFilterName = (e) => {
		this.setState({ filterName: e.target.value });
	};

	render() {
		return (
			<AppContainer>
				<GlobalStyle />
				<Filter
					onChangeFilterMin={this.onChangeFilterMin}
					onChangeFilterMax={this.onChangeFilterMax}
					onChangeFilterName={this.onChangeFilterName}
					filterMinValue={this.state.filterMinValue}
					filterMaxValue={this.state.filterMaxValue}
					filterName={this.state.filterName}
				/>
				<ProductCards
					productCards={this.state.products}
					filterMinValue={this.state.filterMinValue}
					filterMaxValue={this.state.filterMaxValue}
					filterName={this.state.filterName}
				/>
				<ShoppingCartItem />
			</AppContainer>
		);
	}
}
