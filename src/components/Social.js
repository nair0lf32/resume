import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree, faDownload  } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Social extends Component {
    render() {
        return (
            <div className="social">
                <a href="https://linktr.ee/nairolf32" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTree} /></a>
                <a href="https://github.com/nair0lf32" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="#" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDownload} /></a>
            </div>
        )
    }
}
export default Social