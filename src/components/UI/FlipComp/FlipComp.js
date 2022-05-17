import React from 'react';
import './index.css';

const FlipComp = (props) => {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={props.image} alt="Avatar" />
                </div>
                <div class="flip-card-back">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                </div>
            </div>
        </div>
    )
}


export default FlipComp;