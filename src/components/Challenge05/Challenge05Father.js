import React, { Component } from 'react';
import Pluralize from 'pluralize';
import Challenge05 from './Challenge05';
import './Challenge05.css';

import HudCores from './HudCores';

import {FiChevronDown} from 'react-icons/fi';
import {FiChevronUp} from 'react-icons/fi';

const lista = [
    {id: 1, produto: 'Pão', quantidade: 2, preco: 1.00},
    {id: 2, produto: 'Leite', quantidade: 1, preco: 4.50},
    {id: 3, produto: 'Ovo', quantidade: 6, preco: 3.00}
]

class Challenge05Father extends Component{
    constructor(props){
        super(props);
        this.state = {
            quantItens: 0,
            valorTotal: 0,
            resumo: '',
            style:{
                backgroundColor: '#00f991'
            },
            dropdown: false
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
    

    colorChange = (value) => {
        if(value === '#282828' || value === 'black'){
            this.setState({style: {backgroundColor: value, color: '#FFF'}});
            return;
        }

        this.setState({style: {backgroundColor: value}});
    }
    
    dropdownHandler = () => {
        
        this.setState({dropdown: !this.state.dropdown});
    }

    
    render(){
        return(

            <div>
                {this.state.dropdown ? 
                    <div className="Container">
                        <div className="Challenge05" style={this.state.style}>
                            <h1>Lista de Compras ({lista.length} {lista.length > 1 ? 'Produtos' : 'Produto'}) <FiChevronUp onClick={this.dropdownHandler} color="#FFF"/></h1>

                            {lista.map(list => (
                                <Challenge05
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

                        <HudCores selectColor={this.colorChange}/>
                    </div>  
                    :
                    <div className="Container">
                        <div className="Challenge05" style={this.state.style}>
                            <h1>Lista de Compras ({lista.length} {lista.length > 1 ? 'Produtos' : 'Produto'}) <FiChevronDown onClick={this.dropdownHandler} color="#FFF"/></h1>
                        </div>
                    </div>
                }
            </div>

        );
    }
}

export default Challenge05Father;