import React, { Component } from "react";
import {
	ProdutosCaixa,
	ProdutoInfo,
	QuantidadeProdutos,
} from "./Style";

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
						<img src="https://picsum.photos/200/200?a=1" alt="" />
						<ProdutoInfo>
							<h3>Produto Exemplo 1</h3>
							<p>R$123,00</p>
							<button>Adicionar ao carrinho</button>
						</ProdutoInfo>
					</li>
					<li>
						<img src="https://picsum.photos/200/200?a=2" alt="" />
						<ProdutoInfo>
							<h3>Produto Exemplo 2</h3>
							<p>R$123,00</p>
							<button>Adicionar ao carrinho</button>
						</ProdutoInfo>
					</li>
					<li>
						<img src="https://picsum.photos/200/200?a=3" alt="" />
						<ProdutoInfo>
							<h3>Produto Exemplo 3</h3>
							<p>R$123,00</p>
							<button>Adicionar ao carrinho</button>
						</ProdutoInfo>
					</li>
					<li>
						<img src="https://picsum.photos/200/200?a=4" alt="" />
						<ProdutoInfo>
							<h3>Produto Exemplo 4</h3>
							<p>R$123,00</p>
							<button>Adicionar ao carrinho</button>
						</ProdutoInfo>
					</li>
					<li>
						<img src="https://picsum.photos/200/200?a=5" alt="" />
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
