import React from 'react';
import './matchListItem.css';
import { Link } from 'react-router-dom';


const MatchListItem = (match) => {


    return (
        <>
            <Link to={`matchSummary/${match.id}`} >
                <div className="contaier__main__matchListItem mb-2 flex">
                    <div className="matchListItem_teamNames">
                        {match.index + 1}: {match.team1} v {match.team2}
                    </div>
                    <span>{">"}</span>
                </div>
            </Link>
        </>
    )
}

export default MatchListItem