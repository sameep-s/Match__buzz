import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className='container__main__navbar pos-stick flex a-item-center'>
                <div className="navbar__brandName">
                    MatchBuzz
                </div>
            </nav>
        </>
    );
}

export default Navbar;