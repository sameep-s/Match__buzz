import React from 'react'
import { MatchDetails, Navbar } from '../../components';
import './matchSummary.css';


const MatchSummary = () => {
    return (
        <>
            <Navbar />
            <div className="container__main__matchSummary flex flex-col a-item-center jc-center">
                <MatchDetails />
            </div>
        </>
    )
}

export default MatchSummary;