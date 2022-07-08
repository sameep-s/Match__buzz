import React, { useEffect, useState } from 'react';
import './filtersMatch.css';

import { yearsLeague, teamNames } from '../../data';

const FilterMatch = () => {

    const [leagueYears, setLeagueYears] = useState([]);
    const [teamNamesData, setTeamNamesData] = useState([]);


    useEffect(() => {
        setLeagueYears([...yearsLeague]);
        setTeamNamesData([...teamNames]);

        console.log(`teamNames:`, teamNames);
        console.log(`team names:`, teamNamesData);
    }, []);

    return (
        <>
            <div className="container__main__FilterMatch mt-2">
                <div className="filter__match__banner">
                    <img
                        src="https://res.cloudinary.com/sameep1/image/upload/v1657217406/ipl__assignment/ipl__logo_oywjhg.jpg"
                        alt="banner__image"
                    />
                </div>


                <div className="container__filters flex mt-1">
                    <div className="filter__Year">
                        <label htmlFor='year' >Year: </label>
                        <select name='year' id='years' >
                            {[...leagueYears].reverse().map((year) => <option key={year} value={year} >{year}</option>)}
                        </select>
                    </div>

                    <div className="filter__team">

                        <label htmlFor='team' >Team: </label>
                        <select name='team' id='team' >
                            <option value='2017' >All</option>
                            {teamNamesData.map((data) => <option key={data.teamShortName} value={data.teamFullName} >{data.teamShortName}</option>)}
                        </select>

                    </div>
                </div>

            </div>
        </>
    )
}

export default FilterMatch;