import React, { useState, useEffect } from 'react';
import './matchDetails.css';
import { useParams } from 'react-router-dom';
import { matchData } from '../../data';

const MatchDetails = () => {
    const [matchDataAll, setMatchDataAll] = useState([]);
    const { matchID } = useParams();


    useEffect(() => {
        window.scrollTo(0, 0);
        setMatchDataAll([...matchData]);

    }, []);

    const [match] = [...matchDataAll]?.filter((item) => item.id === +matchID);
    console.log(`match`, matchID);

    return (
        <>
            <div className="container__main__matchDetails mt-2">
                <div className=' matchDetail__container__heading txt-center pb-1' >Match Summary</div>

                <div className="container__inner__matchDetails">

                    <div className="detail__teamNames mt-1 flex">
                        {match?.team1}
                        <span className='txt-gray' >V/S</span>
                        <span>{match?.team2}</span>
                    </div>

                    <div className="match__result txt-center mt-2">

                        {match?.result === 'tie' ?
                            <span>{match?.winner} won in Super-Over.</span>
                            :
                            <span>{match?.winner} won the match by {match?.win_by_runs === 0 ? match?.win_by_wickets : match?.win_by_runs} {match?.win_by_runs === 0 ? "wickets" : "runs"}</span>
                        }
                    </div>

                    <div className="match__resultType mt-2">
                        <span className='text__bold' >  Result Type:</span> {match?.result.toUpperCase()}.
                    </div>

                    <div className="match__manOfTheMatch">
                        <span className='text__bold' > Man Of The Match:</span> {match?.player_of_match}.
                    </div>

                    <div className="match__venue">
                        <span className='text__bold' > Venue:</span> {match?.venue}.
                    </div>

                    <div className="match__season">
                        <span className='text__bold' >Season:</span> {match?.season}.
                    </div>

                    <div className="match__season">
                        <span className='text__bold' >Date:</span> {match?.date}.
                    </div>

                    <div className="toss_winner">
                        {match?.toss_winner} won the toss and chose to {match?.toss_decision}.
                    </div>

                </div>
            </div>
        </>
    )
}

export default MatchDetails;