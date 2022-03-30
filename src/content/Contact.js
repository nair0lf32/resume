import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email  :   florianedem@gmail.com</h3>
                <h3>Tel/whatsapp   :   +22967242336</h3>
                <Social />
            </div>
        )
    }
}
export default Contact