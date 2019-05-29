import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="cardContentContain">
            <div className="cardContent">
                <h4>Get Started With React</h4>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
                <a href="https://www.reactjs.org">reactjs.org</a>
            </div>
        </div>
    );
}

export default CardContent;