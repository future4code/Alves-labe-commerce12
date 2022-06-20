import React, { Component } from "react";
import {
	ContainerProdutos,
	ProdutosCaixa,
	ProdutoInfo,
	QuantidadeProdutos,
	ContainerSemProduto,
	SemProduto,
} from "./Style";

export default class ProductCards extends Component {
	state = {
		orderBy: "CRESCENTE",
	};

	productFilterOrder = () => {
		return this.props.productCards
			.filter((product) => {
				return (
					this.props.filterMinValue === 0 ||
					product.value >= this.props.filterMinValue
				);
			})
			.filter((product) => {
				return (
					this.props.filterMaxValue === 0 ||
					product.value <= this.props.filterMaxValue
				);
			})
			.filter((product) => {
				return product.name
					.toLowerCase()
					.includes(this.props.filterName.toLowerCase());
			})
			.sort((a, b) => {
				const isReversed =
					this.state.orderBy === "CRESCENTE" ? 1 : -1;

				return isReversed * a.name.localeCompare(b.name);
			});
	};

	updateOrder = (e) => {
		this.setState({
			orderBy: e.target.value,
		});
	};

	render() {
		const newFilteredList = this.productFilterOrder().map(
			(product) => {
				return (
					<li key={product.id}>
						<img src={product.image} alt="" />
						<ProdutoInfo>
							<h3>{product.name}</h3>
							<p>R$ {product.value}</p>
							<button>Adicionar ao carrinho</button>
						</ProdutoInfo>
					</li>
				);
			}
		);

		if (newFilteredList.length === 0) {
			return (
				<ContainerSemProduto>
					<SemProduto>
						<h1>Nenhuma camiseta encontrada</h1>
					</SemProduto>
				</ContainerSemProduto>
			);
		}

		return (
			<ContainerProdutos>
				<QuantidadeProdutos>
					<p>Quantidade de Produtos: {newFilteredList.length}</p>
					<label>
						Ordenação:
						<select
							value={this.state.orderType}
							onChange={this.updateOrder}
						>
							<option value="CRESCENTE">Crescente</option>
							<option value="DECRESCENTE">Decrescente</option>
						</select>
					</label>
				</QuantidadeProdutos>
				<ProdutosCaixa>{newFilteredList}</ProdutosCaixa>
			</ContainerProdutos>
		);
	}
}
