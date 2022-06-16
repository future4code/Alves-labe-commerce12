import styled from "styled-components";

export const ProdutosCaixa = styled.ul`
	display: grid;

	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;

	padding: 10px;
	margin-top: 10px;
	list-style: none;

	background-color: #fff;
	border-radius: 5px;

	li {
		display: flex;
		flex-direction: column;
		border: 1px solid black;
		border-radius: 5px;

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
		color: white;
		cursor: pointer;

		font-weight: bold;
		border: none;
		border-radius: 4px;

		background-color: black;
		padding: 10px;
		transition: all 0.2s;

		:hover {
			transition: all 0.2s;
			opacity: 0.7;
		}
	}
`;

export const QuantidadeProdutos = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 10px;
	border: 1px solid black;
	border-radius: 5px;

	background-color: #fff;
`;
