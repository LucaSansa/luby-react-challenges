import React, { Component } from 'react';
import Pluralize from 'pluralize';
import './Challenge05.css';

class Challenge05 extends Component{
    constructor(props){
        super(props);
        this.state = {
            produto: '',
            quantidade: '',
            preco: 0
        };
    }

    convertedValue(value){
        return new Intl.NumberFormat([], { style: 'currency', currency: 'BRL' }).format(value);
    }   

    componentDidMount(){
        this.setState({produto: Pluralize(this.props.produto, this.props.quantidade)});
        this.setState({quantidade: this.props.quantidade});
        this.setState({preco: this.convertedValue(this.props.preco)});
    }

    render(){
        return(
            <div className="Produtos">
                <li>{this.state.quantidade}X {this.state.produto}</li>
                <p>{this.state.preco}</p>
            </div>
        );

    }
}

export default Challenge05;