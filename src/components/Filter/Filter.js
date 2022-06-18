import React, { Component } from "react";
import { FiltroContainer, FiltroBox, Card } from "./Style";
import produtosList from "./Produtos.json"

export default class Filter extends Component {
	state = {

		produto: produtosList,

		query: "",
		minPrice: "",
		maxPrice: ""

	}

	UpdateQuery = (event) => {
		this.setState({
			query: event.target.value
		})
	}

	UpdateMinPrice = (event) => {
		this.setState({
			minPrice: event.target.value
		})
	}

	UpdateMaxPrice = (event) => {
		this.setState({
			maxPrice: event.target.value
		})
	}



	render() {
		return (
			<FiltroContainer>


				{this.state.produto
					.filter(prodt => {
						return prodt.title.toLowerCase().includes(this.state.query.toLowerCase()) ||
							prodt.imagem.toLowerCase().includes(this.state.query.toLowerCase())
					})
					.filter(prodt => {
						return this.state.minPrice === "" || prodt.price >= this.state.minPrice
					})
					.filter(prodt => {
						return this.state.maxPrice === "" || prodt.price <= this.state.maxPrice
					})
					.map(prodt => {
						return <Card key={prodt.id} prodt={prodt} />
					})}

				<FiltroBox>
					<h4>Filtros:</h4>
					<label>Valor mínimo:</label>
					<input type="number"
						placeholder="100"
						value={this.state.minPrice}
						onChange={this.UpdateMinPrice}
					/>

					<label>Valor máximo:</label>
					<input type="number"
						placeholder="1000"
						value={this.state.maxPrice}
						onChange={this.UpdateMaxPrice}
					/>

					<label>Busca por nome:</label>
					<input type="text"
						placeholder="Produto"
						value={this.state.query}
						onChange={this.UpdateQuery} />
				</FiltroBox>
			</FiltroContainer>
		);
	}
}
