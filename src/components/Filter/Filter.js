import React, { Component } from "react";
import { FiltroContainer, FiltroBox } from "./Style";

export default class Filter extends Component {
	render() {
		return (
			<FiltroContainer>
				<FiltroBox>
					<h4>Filtros:</h4>
					<label>Valor mínimo:</label>
					<input
						type="number"
						placeholder="Valor Mínimo"
						value={this.props.filterMinValue}
						onChange={this.props.onChangeFilterMin}
					/>

					<label>Valor máximo:</label>
					<input
						type="number"
						placeholder="Valor Máximo"
						value={this.props.filterMaxValue}
						onChange={this.props.onChangeFilterMax}
					/>

					<label>Buscar por nome:</label>
					<input
						type="text"
						placeholder="Digite o nome do produto"
						value={this.props.filterName}
						onChange={this.props.onChangeFilterName}
					/>
				</FiltroBox>
			</FiltroContainer>
		);
	}
}
