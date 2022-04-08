import React, { Component } from 'react'
class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'myskills': ['JavaScript', 'React JS', 'Python', 'Php', 'Java']
        };
    }
    render() {
        return (
            <div className="container skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li key={value}> {value}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Skills