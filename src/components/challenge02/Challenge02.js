import React, { Component } from 'react';

import Pluralize from 'pluralize';

import './Challenge02.css';

class Challenge02 extends Component{

    state = {
        palavra: ''
    }

    componentDidMount(){
        const palavra = Pluralize(this.props.nome, this.props.number);
        this.setState({palavra: palavra})
    }

    render(){
        return(            
            <div className="Challenge02">
                <h1>{this.props.number}</h1>
                <h2>{this.state.palavra}</h2>
            </div>
        );
    }
}

export default Challenge02;