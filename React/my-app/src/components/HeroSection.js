import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="./videos/video-1.mp4"
                autoPlay loop muted />
            <h1>Eric's Zoom land</h1>
            <p>I refuse to come to 377</p>

            <div className='hero-btns'>
                {/* Customized Button we made in the button.js */}
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn-large'
                >
                
                    Never
                </Button>

                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn-large'
                >
                    Now <i className = 'farfa-play-circle'/>
                </Button>

            </div>

        </div>
    );
}

export default HeroSection;