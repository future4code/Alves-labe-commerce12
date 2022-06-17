import React, { Component } from "react";
import {
	ContainerProdutos,
	ProdutosCaixa,
	ProdutoInfo,
	QuantidadeProdutos,
} from "./Style";

import Camiseta1 from "../.././img/camiseta-alien.jpg";
import Camiseta2 from "../.././img/camiseta-nasa.jpg";
import Camiseta3 from "../.././img/camiseta-alien2.jpg";
import Camiseta4 from "../.././img/camiseta-astronauta.jpg";
import Camiseta5 from "../.././img/camiseta-ovni.jpg";

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
		orderType: "cre",
	};

	updateOrder = (e) => {
		this.setState({
			orderType: e.target.value,
		});
	};

	render() {
		const ordenarProdutos = this.state.produtos.sort((a, b) => {
			const isReversed = this.state.orderType === "cre" ? 1 : -1;

			return isReversed * a.nome.localeCompare(b.nome);
		});

		const listaDeProdutos = ordenarProdutos.map((produto) => {
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
		});

		return (
			<ContainerProdutos>
				<QuantidadeProdutos>
					<p>Quantidade de Produtos: {this.state.produtos.length}</p>

					<label>
						Ordenação:
						<select
							name="order"
							value={this.state.order}
							onChange={this.updateOrder}
						>
							<option value="cre">Crescente</option>

							<option value="des">Decrescente</option>
						</select>
					</label>
				</QuantidadeProdutos>

				<ProdutosCaixa>{listaDeProdutos}</ProdutosCaixa>
			</ContainerProdutos>
		);
	}
}
