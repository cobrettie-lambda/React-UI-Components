import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="cardContentContain">
            <div className="cardContent">
                <h2>Get Started With React</h2>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
                <a href="https://www.reactjs.org">reactjs.org</a>
            </div>
        </div>
    );
}

export default CardContent;