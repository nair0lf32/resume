import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
class Social extends Component {
    render() {
        return (
            <div className="social">
                <a href="https://codepen.io/#" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCoffee} /></a>
                <a href="https://github.com/#" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://Instagram.com#" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/#" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://Linkedin.com/in/#" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
        )
    }
}
export default Social