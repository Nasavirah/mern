import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about">
                <h3>Ourselves</h3>
                <h2>Stylish Portfolio is the perfect theme for your next project</h2>
                <div className="row">
                    <p>This theme features a flexible,UX friendly slidebar menu and stock photos from our friends</p>
                    <br/>
                    <a href ="#button">{this.props.button}</a>
                </div>
            </div>
        );
    }
}
 
 export default About;
