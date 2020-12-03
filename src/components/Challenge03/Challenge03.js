import React, { Component } from 'react';

import Pluralize from 'pluralize';

import './Challenge03.css';


class Challenge03 extends Component{

    state = {
        palavra: ''
    }

    componentDidMount(){
        const palavra = Pluralize(this.props.nome, this.props.number);
        this.setState({palavra: palavra})
    }

    render(){
        return(
            <div className="Challenge03" style={this.props.styleFather}>
                <h1>{this.props.number}</h1>
                <h2>{this.state.palavra}</h2>
            </div>
        );
    }
}

export default Challenge03;