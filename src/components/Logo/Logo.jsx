import React from 'react';
import logo from '../../assets/img/logo.svg';

function Logo (props) {
  const {src, alt}=props;
    return (
        <div className="header__logo">
        <img width="38" src={src ? src: logo} alt={alt ? alt: "Logo"} />
        <div>
          <h1>Kids-books</h1>
          <p>читайте вместе с нами</p>
        </div>
      </div>
     
    );
}

export default Logo;