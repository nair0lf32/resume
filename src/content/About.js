import React, { Component } from 'react';
class About extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="subtopic">About Me</h1>
                <h4>Hello there,</h4>
                <h1>I'm EDEMESSI Florian</h1>
                <h3>Full Stack Web <u>Developer wannabe</u> | Amateur <u>Designer</u></h3>
                <br></br>
                <p>I Am actually a medical student with a great passion for computer sciences.
                    I am a self-taught programmer and My main goal is to learn software engineering
                    and Web Development, to create something that will help people, mostly people who are in need
                    of medical services. I am still a beginner in this field,
                    but I am trying to learn new things and improve my skills. This is a simple react app I made
                    using this <a href='https://github.com/naaficodes/Portfolio_Website_ReactJS'>example</a>.
                    I am also learning cross-platform development with flutter and I am a bit invested
                    in cybersecurity and infosec. 
                    <br></br>
                    You can use the social media icons to respectively check my about-me page, my github page and
                    download a text format copy of my resume (not added yet).
                
                </p>
            </div>
        )
    }
}
export default About