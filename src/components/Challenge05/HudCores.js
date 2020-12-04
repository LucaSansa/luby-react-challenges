import React, {Component} from 'react';
import { FiCircle } from 'react-icons/fi';
import {FaCheckCircle} from 'react-icons/fa';

import './Challenge05.css';



class HudCores extends Component{

    state = {
        colorBlack: false,
        colorBlue: false,
        colorOrange: false,
        colorGreen: false,
        black: {
            backgroundColor: '#282828'    
        },
        blue:{
            backgroundColor: '#0000FF'
        },
        orange: {
            backgroundColor: '#ffa42f'
        },
        green: {
            backgroundColor: '#6bf49b'
        }
    }

    mudaIcone = (value) => {
        
        switch(value){
            case 'black':
                
                this.setState({colorBlack: true, colorBlue: false, colorOrange: false, colorGreen:false});
                this.props.selectColor(this.state.black.backgroundColor);
                break;
            case 'blue':
                this.setState({colorBlack: false, colorBlue: true, colorOrange: false, colorGreen:false});
                this.props.selectColor(this.state.blue.backgroundColor);
                break;
            case 'orange':
                this.setState({colorBlack: false, colorBlue: false, colorOrange: true, colorGreen:false});
                this.props.selectColor(this.state.orange.backgroundColor);
                break;
            case 'green':
                this.setState({colorBlack: false, colorBlue: false, colorOrange: false, colorGreen:true}); 
                this.props.selectColor(this.state.green.backgroundColor);
                break;
            default: return null;
        }
        
    }

    render(props){
        return (

            <div className="Hud">

                <div>
                    {this.state.colorBlack ? <FaCheckCircle size={40} color="#282828"/> : <FiCircle size={40} color="#282828" onClick={() => this.mudaIcone('black')}/>}
                    <p>Preto</p>
                </div>

                <div>
                    {this.state.colorBlue ? <FaCheckCircle size={40} color="#0000FF"/> : <FiCircle size={40} color="#0000FF" onClick={() => this.mudaIcone('blue')}/>}
                    <p>Azul</p>
                </div>

                <div>
                    {this.state.colorOrange ? <FaCheckCircle size={40} color="#ffa42f"/> : <FiCircle size={40} color="#ffa42f" onClick={() => this.mudaIcone('orange')}/>}
                    <p>Laranja</p>
                </div>

                <div>
                    {this.state.colorGreen ? <FaCheckCircle size={40} color="#6bf49b"/> : <FiCircle size={40} color="#6bf49b" onClick={() => this.mudaIcone('green')}/>}
                    <p>Verde</p>
                </div>

            </div>

        );
    }
}

export default HudCores;

