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

const produtos = [
	{
		id: 1,
		imagem: Camiseta1,
		nome: "Camiseta Alien",
		valor: 79.9,
	},
	{
		id: 2,
		imagem: Camiseta2,
		nome: "Camiseta Nasa",
		valor: 79.9,
	},
	{
		id: 3,
		imagem: Camiseta3,
		nome: "Camiseta Alien",
		valor: 59.9,
	},
	{
		id: 4,
		imagem: Camiseta4,
		nome: "Camiseta Astronauta",
		valor: 59.9,
	},
	{
		id: 5,
		imagem: Camiseta5,
		nome: "Camiseta Ovni",
		valor: 59.9,
	},
];

export default class App extends Component {
	render() {
		return (
			<AppContainer>
				<GlobalStyle />
				<Filter />
				<ProductCards produtosCard={produtos} />
				<ShoppingCartItem />
			</AppContainer>
		);
	}
}
