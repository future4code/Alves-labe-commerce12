import React, { Component } from 'react'
import { Container, ContainerProdutos, Produto } from './StyleShoppingCard'

export default class ShoppingCartItem extends Component {
  render() {
    return (
      <Container>
          <h3>Carrinho</h3>
          <ContainerProdutos>
                   <Produto>
                     <ul>
                        <li> Produto 1 
                        <button>Remover</button>
                        </li>
                        <li>Produto 2 
                        <button>Remover</button>
                        </li>
                     </ul>
                      
                  </Produto>
              
          </ContainerProdutos>
      </Container>
    )
  }
}
