import React, { Component } from 'react'
import ProdutoInfo from '../Products/Style'

export default class Filter extends Component {


    state = {
        ProdutoInfo: '',
        filtro: ''
    };

    onChangeInput = (event) => {
        this.setState({ ProdutoInfo: event.target.value })
    };

    selectViagem = (id) => {
        const listaDeViagem = this.state.ProdutoInfo.map((viagem) => {
            if (id === viagem.id) {
                const novaLista = {
                    ...viagem,
                    ProdutoInfo: !viagem.ProdutoInfo
                }
                return novaLista
            } else {
                return viagem
            }
        })

        this.setState({ ProdutoInfo: listaDeViagem })
    };

    onChangeFilter = (event) => {
        this.setState({ filtro: event.target.value })
    };

    render() {
        let viagemFiltrada = this.state.ProdutoInfo.filter((ProdutoInfo)  => {
            switch (this.state.filtro) {
                case 'viagens':
                    return !ProdutoInfo
                case 'planos':
                    return ProdutoInfo
                default:
                    return true
            }
        })
        return (

            <div>
                <ProdutoInfo />
                <h1>Filtro:</h1>
                <InputsContainer>
                    <input value={this.state.ProdutoInfo}
                        onChange={this.onChangeInput} />
                    <button onClick={this.selectViagem}> adicionar </button>
                </InputsContainer>
                <br />

                <InputsContainer>
                    <label>Filtro</label>
                    <select value={this.state.filtro}
                        onChange={this.onChangeFilter}>
                        <option value="">Baratas</option>
                        <option value="viagens">Preço</option>
                        <option value="planos">Planos</option>
                    </select>
                </InputsContainer>

                <ViagemList>
                    {viagemFiltrada.map(ProdutoInfo => {
                        return (
                            <Viagem
                                key={ProdutoInfo.id}
                                ProdutoInfo={ProdutoInfo}

                                onClick={() => this.selectViagem(ProdutoInfo.id)}>
                                {ProdutoInfo}
                            </Viagem>
                        )
                    })}


                </ViagemList>
            </div>
        )
    }
}
