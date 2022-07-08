import React, { useEffect, useState, useMemo } from 'react';
import './filtersMatch.css';
import { yearsLeague, teamNames, matchData } from '../../data';
import { MatchListItem } from '../';

const FilterMatch = () => {

    const [leagueYears, setLeagueYears] = useState([]);
    const [teamNamesData, setTeamNamesData] = useState([]);
    const [matchDataIpl, setMatchDataIpl] = useState([]);
    const [filters, setFilters] = useState({
        year: 2017,
        team: "All"
    });

    useEffect(() => {
        setLeagueYears([...yearsLeague]);
        setTeamNamesData([...teamNames]);
        setMatchDataIpl([...matchData])

        // console.log(`match data:`, matchDataIpl);
        console.log(`filters:`, filters);
    }, []);


    function getFilteredMatches(year = 2017, teamName = 'All', matchList) {
        matchList = matchList.filter((match) => match.season === year);

        return teamName === 'All' ? matchList : matchList.filter((match) => match.team1 === teamName || match.team2 === teamName)
    }


    const filteredMatches = useMemo(() => getFilteredMatches(filters.year, filters.team, matchDataIpl), [filters.year, filters.team, matchDataIpl])



    return (
        <>
            <main>
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
                            <select name='year' onChange={(e) => { setFilters({ ...filters, year: +e.target.value }) }} id='years' >
                                {[...leagueYears].reverse().map((year) => <option key={year} value={year} >{year}</option>)}
                            </select>
                        </div>

                        <div className="filter__team">

                            <label htmlFor='team' >Team: </label>
                            <select name='team' onChange={(e) => setFilters({ ...filters, team: e.target.value })} id='team' >
                                <option value='All' >All</option>
                                {teamNamesData.map((data) => <option key={data.teamShortName} value={data.teamFullName} >{data.teamShortName}</option>)}
                            </select>

                        </div>
                    </div>

                </div>

                <div className="container__matchListItem mt-2">

                    {filteredMatches.length === 0 ? <h1>No Matches To Show</h1> : filteredMatches.map((match, index) => <MatchListItem key={index} {...{ ...match, index }} />)}

                </div>
            </main>
        </>
    )
}

export default FilterMatch;