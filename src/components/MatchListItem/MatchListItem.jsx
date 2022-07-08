import React from 'react';
import './matchListItem.css';

const MatchListItem = (match) => {


    return (
        <>
            <div className="contaier__main__matchListItem mb-2 flex">
                <div className="matchListItem_teamNames">
                    {match.index + 1}: {match.team1} v {match.team2}
                </div>
                <span>{">"}</span>
            </div>
        </>
    )
}

export default MatchListItem