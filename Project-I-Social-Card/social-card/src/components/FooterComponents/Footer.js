import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerContent">
                <div className="footerIcons">
                    <i class="far fa-comment"></i>
                    <i class="fas fa-sync"></i>
                    <i class="far fa-heart"></i>
                    <i class="far fa-envelope"></i>
                </div>
            </div>
        </div>
    );
}

export default Footer;