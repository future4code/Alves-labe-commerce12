import React, { Component } from "react";
import {
	ContainerProdutos,
	ProdutosCaixa,
	ProdutoInfo,
	QuantidadeProdutos,
} from "./Style";

export default class ProductCards extends Component {
	state = {
		orderType: "cre",
	};

	updateOrder = (e) => {
		this.setState({
			orderType: e.target.value,
		});
	};

	render() {
		const ordenarProdutos = this.props.produtosCard.sort((a, b) => {
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
					<p>Quantidade de Produtos: </p>

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
