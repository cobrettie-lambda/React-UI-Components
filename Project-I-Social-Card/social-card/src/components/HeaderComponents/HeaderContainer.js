import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

function HeaderContainer() {
    return (
        <div className = "container">

        <ImageThumbnail />
        <HeaderTitle />
        </div>
    );
}

export default HeaderContainer;