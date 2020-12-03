import React, { Component } from 'react';
import Pluralize from 'pluralize';
import Challenge04 from './Challenge04';
import './Challenge04.css';

const lista = [
    {id: 1, produto: 'Pão', quantidade: 2, preco: 1.00},
    {id: 2, produto: 'Leite', quantidade: 1, preco: 4.50},
    {id: 3, produto: 'Ovo', quantidade: 6, preco: 3.00}
]

class Challenge04Father extends Component{
    constructor(props){
        super(props);
        this.state = {
            quantItens: 0,
            valorTotal: 0,
            resumo: ''
        };
    };

    convertedValue(value){
        return new Intl.NumberFormat([], { style: 'currency', currency: 'BRL' }).format(value);
    }  

    componentDidMount(){
        let itens = lista.reduce((acc, atual) => {
            return acc + atual.quantidade;
        }, 0);

        let total = lista.reduce((acc, atual) => {
            return acc + atual.preco;
        }, 0);

        this.setState({quantItens: itens});
        this.setState({valorTotal: this.convertedValue(total)});
        
        let resumo = lista.map(list => {
            return `${list.quantidade} ${Pluralize(list.produto, list.quantidade)} `
        });
        this.setState({resumo: resumo});
    }


    render(){
        return(

            <div className="Container">
                <div className="Challenge04">
                    <h1>Lista de Compras ({lista.length} {lista.length > 1 ? 'Produtos' : 'Produto'})</h1>

                    {lista.map(list => (
                        <Challenge04
                            key={list.id}
                            produto={list.produto}
                            quantidade={list.quantidade}
                            preco={list.preco}
                        />
                    ))}

                    <div className="Resumo">
                        <h2>Resumo</h2>
                        <p>{this.state.quantItens} {this.state.quantItens > 1 ? 'Items:' : 'Item:'} {this.state.resumo}</p>
                        <p style={{fontWeight:'bold'}}>{this.state.valorTotal}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Challenge04Father;