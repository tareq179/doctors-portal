import React from 'react';
import HeaderMain from './HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar/>
            <HeaderMain/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;