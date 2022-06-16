import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid black;
    padding: 0px 31px 225px 30px;
    h3 {
		font-weight: bold;
		margin-bottom: 10px;
    }
`;

export const ContainerProdutos = styled.div`
        display: grid;
        gap: 8px;
`;

export const Produto = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 4px;
    -webkit-box-align: center;
    align-items: center;



`;