import React, { useState, useEffect } from 'react';
import './matchDetails.css';
import { useParams } from 'react-router-dom';
import { matchData, teamNames } from '../../data';

const MatchDetails = () => {
    const [matchDataAll, setMatchDataAll] = useState([...teamNames]);
    const [teamNamesAll, setTeamNamesAll] = useState([...matchData]);

    const { matchID } = useParams();


    useEffect(() => {
        window.scrollTo(0, 0);

        setMatchDataAll([...matchData]);
        setTeamNamesAll([...teamNames]);
    }, []);

    const [match] = [...matchDataAll]?.filter((item) => item.id === +matchID);

    const [{ teamLogo: image1 }] = [...teamNamesAll]?.filter((item) => item?.teamFullName === match?.team1) || 0;
    const [{ teamLogo: image2 }] = [...teamNamesAll]?.filter((item) => item?.teamFullName === match?.team2) || 0;

    console.log(`image1: `, image1);

    return (
        <>
            <div className="container__main__matchDetails mt-2">
                <div className=' matchDetail__container__heading txt-center pb-1' >Match Summary</div>

                <div className="container__inner__matchDetails">

                    <div className="teams__image__container flex jc-center a-item-center mt-2 mb-2">
                        <div className="image__team1">
                            {image1 && <img src={image1} alt="team1__image" />}
                        </div>

                        <span className='txt-gray' >V/S</span>

                        <div className="image__team2">
                            {image2 && <img src={image2} alt="team2__image" />}
                        </div>
                    </div>

                    <div className="detail__teamNames mt-1 flex">
                        {match?.team1}
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