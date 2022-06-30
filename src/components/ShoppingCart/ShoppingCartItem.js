import React, { Component } from "react";
import {
	ContainerShoppingCart,
	CartBox,
	ListaCart,
} from "./StyleShoppingCard";

export default class ShoppingCartItem extends Component {
	render() {
		return (
			<ContainerShoppingCart>
				<h4>Carrinho:</h4>

				<CartBox>
					<ListaCart>
						<p>1x Produto 1</p>
						<button>Remover</button>
					</ListaCart>

					<ListaCart>
						<p>2x Produto 2</p>
						<button>Remover</button>
					</ListaCart>

					<h3>Valor total: R$70,00</h3>
				</CartBox>
			</ContainerShoppingCart>
		);
	}
}
