import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="General Medecine" where="FSS-UAC, Cotonou" from="June 2015" to="Present" />
                <Widecard title="Baccalaureate" where="EEGTP Laura Vicuna" from="2009" to="2015" />
            </div>
        )
    }
}
export default Education