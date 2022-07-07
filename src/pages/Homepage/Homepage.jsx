import React from 'react';
import './homepage.css';
import { FilterMatch, Navbar } from '../../components';

const Homepage = () => {
    return (
        <>
            <Navbar />
            <main className="container__main__homepage flex jc-center">
                <FilterMatch />
            </main>
        </>
    );
}

export default Homepage;