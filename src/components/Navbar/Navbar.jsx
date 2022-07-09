import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className='container__main__navbar pos-stick flex a-item-center'>
                <Link to='/'>
                    <div className="navbar__brandName">
                        MatchBuzz
                    </div>
                </Link>

            </nav>
        </>
    );
}

export default Navbar;