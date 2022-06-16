import React, { Component } from "react";
import { FiltroContainer, FiltroBox } from "./Style";

export default class Filter extends Component {
	render() {
		return (
			<FiltroContainer>
				<FiltroBox>
					<h4>Filtros:</h4>
					<label>Valor mínimo:</label>
					<input type="number" placeholder="100" />

					<label>Valor máximo:</label>
					<input type="number" placeholder="1000" />

					<label>Busca por nome:</label>
					<input type="text" placeholder="Produto" />
				</FiltroBox>
			</FiltroContainer>
		);
	}
}
