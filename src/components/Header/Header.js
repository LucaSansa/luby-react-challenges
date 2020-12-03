import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <Link to="/"><h3>Challenge 02</h3></Link>
                <Link to="challenge03"><h3>Challenge 03</h3></Link>
                <Link to="challenge04"><h3>Challenge 04</h3></Link>
                <Link to="Challenge05"><h3>Challenge 05</h3></Link>
                
            </div>
        );
    }
}

export default Header;