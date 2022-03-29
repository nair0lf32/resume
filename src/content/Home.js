import React, { Component } from 'react';
//importing the picture as "profilepic".
import profilepic from '../images/profile.png';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} alt="profile" className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['I am EDEMESSI Florian', 'I am a web developer wannabe']} speed={100} eraseDelay={700} />
                <Social />
            </div>
        )
    }
}
export default Home





