import React from 'react'
import { MatchDetails, Navbar } from '../../components';

const MatchSummary = () => {
    return (
        <>
            <Navbar />
            <div className="container__main__matchSummary flex jc-center">
                <MatchDetails />
            </div>
        </>
    )
}

export default MatchSummary;