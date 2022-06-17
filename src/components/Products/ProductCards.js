import React, { Component } from "react";
import {
	ProdutosCaixa,
	ProdutoInfo,
	QuantidadeProdutos,
} from "./Style";

import Camiseta1 from "../.././img/camiseta-alien.png";
import Camiseta2 from "../.././img/camiseta-nasa.png";
import Camiseta3 from "../.././img/camiseta-alien2.png";
import Camiseta4 from "../.././img/camiseta-astronauta.png";
import Camiseta5 from "../.././img/camiseta-ovni.png";

export default class ProductCards extends Component {
	state = {
		produtos: [
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
		],
	};

	updateOrder = (event) => {
		this.setState({
			order: event.target.value,
		});
	};

	render() {
		return (
			<div>
				<QuantidadeProdutos>
					<p>Quantidade de Produtos: {this.state.produtos.length}</p>
					<label>
						Ordenação:
						<select
							name="order"
							value={this.state.order}
							onChange={this.updateOrder}
						>
							<option value="asc">Crescente</option>
							<option value="desc">Decrescente</option>
						</select>
					</label>
				</QuantidadeProdutos>
				<ProdutosCaixa>
					{this.state.produtos.map((produto) => {
						return (
							<li key={produto.id}>
								<img src={produto.imagem} alt="" />
								<ProdutoInfo>
									<h3>{produto.nome}</h3>
									<p>R$ {produto.valor}</p>
									<button>Adicionar ao carrinho</button>
								</ProdutoInfo>
							</li>
						);
					})}
				</ProdutosCaixa>
			</div>
		);
	}
}
