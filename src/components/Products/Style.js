import styled from "styled-components";

export const ProdutosCaixa = styled.ul`
	display: grid;

	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;

	margin-top: 10px;
	padding-top: 20px;
	list-style: none;

	li {
		display: flex;
		flex-direction: column;
		border: 1px solid black;

		img {
			align-self: center;
			max-height: 250px;
		}
	}
`;

export const ProdutoInfo = styled.section`
	display: flex;
	flex-direction: column;

	margin-bottom: 10px;
	padding: 10px;

	h3 {
		font-weight: bold;
		margin-bottom: 10px;
	}

	p {
		margin-bottom: 10px;
	}

	button {
		align-self: center;
		cursor: pointer;
	}
`;

export const QuantidadeProdutos = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
