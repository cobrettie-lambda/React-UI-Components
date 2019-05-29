import React from 'react';
import './Header.css';
import './HeaderContent'
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
            <div className="headerTitle">
                <h4>Lambda School</h4>
                <span>@lambdaschool</span>
                <span>&#183;</span>
                <span>26 jan</span>
            </div>
    );
}

export default HeaderTitle;
