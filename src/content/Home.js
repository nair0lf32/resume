import React, { Component } from 'react';
//importing the picture as "profilepic".
import profilepic from '../images/profile.png';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="container home">
                <h1 className='title'>My Resume (portfolio 2)</h1>
                <ReactTypingEffect className="typingeffect" 
                    text={['I am EDEMESSI Florian ', 'A web/Mobile development enthusiast']} 
                    speed={50}
                    eraseSpeed={100} 
                    eraseDelay={300}
                    cursor={['|']} />
                <img src={profilepic} alt="profile" className="profilepic"></img>
                <Social />
            </div>
        )
    }
}
export default Home





