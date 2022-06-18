import styled from "styled-components";

export const FiltroContainer = styled.section`
	border: 1px solid black;

	background-color: #fff;
	border-radius: 5px;
`;

export const Card = styled.section ``;

export const FiltroBox = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	margin: 10px;

	h4 {
		margin: 10px 0;

		font-size: 20px;
		font-weight: bold;
	}

	label {
		margin-bottom: 5px;
	}

	input {
		margin-bottom: 10px;
		width: 65%;

		border: 1px solid black;
		padding: 8px;
		border-radius: 5px;
	}
`;
