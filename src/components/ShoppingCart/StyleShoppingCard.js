import styled from "styled-components";

export const ContainerShoppingCart = styled.section`
	border: 1px solid black;
	padding: 8px;
	list-style: none;

	background-color: #fff;
	border-radius: 5px;

	h4 {
		margin: 10px 0;

		font-size: 20px;
		font-weight: bold;
	}
`;

export const CartBox = styled.div`
	display: grid;
	gap: 8px;

	h3 {
		font-weight: bold;
	}
`;

export const ListaCart = styled.div`
	display: grid;
	grid-auto-flow: column;

	gap: 8px;
	align-items: center;

	button {
		cursor: pointer;
		color: white;

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
