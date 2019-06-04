import React from 'react';
import './Footer.css';

// let counter = document.getElementById('btncounter'), count = 0;
// counter = () => {
//         count += 1;
//         counter.textContent = " " + count;
// };

// var likeCount = 0;
// var retweetCount = 0;

// function addLike() {
//     likeCount +=1;
// };

// function addRetweet() {
//     retweetCount +=1;
// };

// var count = 0;
// function myFunction() {
//     count ++;
//     var divData = document.getElementById('btnCounter');
//     divData.innerHTML = count;
//     console.log(count);
// }

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerContent">
                <div className="footerIcons">
                    <button id="btncounter"><i className="far fa-comment"></i></button>
                    <button id="btncounter"><i className="fas fa-sync"></i></button>
                    <button id="btncounter"><i className="far fa-heart"></i></button>
                    <button id="btncounter"><i className="far fa-envelope"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Footer;