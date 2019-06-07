import React, { Component } from 'react';
import Background from './img/h.jpg';
import'./Header.css';
const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '70vh',
    backgroundSize: 'cover'
}
class Header extends Component {
    render() {
        return (
            <header style={myStyles}>
            <h1>{this.props.title}</h1>
            <p>A Bootstrap Free Theme for Learning React JS.</p>
            <a href ="#button">{this.props.button}</a>
            </header>
        );
    }
};
export default Header;