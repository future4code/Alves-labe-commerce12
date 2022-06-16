import React, { Component } from "react";
import {
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
	render() {
		return (
			<div>
				<QuantidadeProdutos>
					<p>Quantidade de Produtos: 4</p>
					<label>
						Ordenação:
						<select>
							<option>Crescente</option>
							<option>Decrescente</option>
						</select>
					</label>
				</QuantidadeProdutos>
				<ProdutosCaixa>
					<li>
						<img src={Camiseta1} alt="" />
						<ProdutoInfo>
							<h3>Produto Exemplo 1</h3>
							<p>R$123,00</p>
							<button>Adicionar ao carrinho</button>
						</ProdutoInfo>
					</li>
					<li>
						<img src={Camiseta2} alt="" />
						<ProdutoInfo>
							<h3>Produto Exemplo 2</h3>
							<p>R$123,00</p>
							<button>Adicionar ao carrinho</button>
						</ProdutoInfo>
					</li>
					<li>
						<img src={Camiseta3} alt="" />
						<ProdutoInfo>
							<h3>Produto Exemplo 3</h3>
							<p>R$123,00</p>
							<button>Adicionar ao carrinho</button>
						</ProdutoInfo>
					</li>
					<li>
						<img src={Camiseta4} alt="" />
						<ProdutoInfo>
							<h3>Produto Exemplo 4</h3>
							<p>R$123,00</p>
							<button>Adicionar ao carrinho</button>
						</ProdutoInfo>
					</li>
					<li>
						<img src={Camiseta5} alt="" />
						<ProdutoInfo>
							<h3>Produto Exemplo 5</h3>
							<p>R$123,00</p>
							<button>Adicionar ao carrinho</button>
						</ProdutoInfo>
					</li>
				</ProdutosCaixa>
			</div>
		);
	}
}
