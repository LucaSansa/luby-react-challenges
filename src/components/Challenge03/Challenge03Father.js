import React, { Component } from 'react';

import Challenge03 from './Challenge03';

class Challenge03Father extends Component{


    render(){
        const style = {
            borderColor: '#00f990', 
            color: 'blue'
        }; 

        return <Challenge03 number={2} nome="Carro" styleFather={style}/>
    }
}

export default Challenge03Father;