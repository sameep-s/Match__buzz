import React, { useState, useEffect, useMemo } from 'react';
import { BarGraph, Navbar, PieGraph } from '../../components';
import './teamSummary.css';
import { matchData, yearsLeague, teamNames } from '../../data';
import { useParams } from 'react-router-dom';
import { getWins } from '../../util';

const TeamSummary = () => {

    const [matchDataAll, setMatchDataAll] = useState([...matchData]);
    const [yearsLeagueAll, setLeagueYearsAll] = useState([...yearsLeague]);
    const [teamNamesAll, setTeamNamesAll] = useState([...teamNames]);
    const { teamName } = useParams();

    function getDataPie(year, dataChart) {
        const data = dataChart[year];

        const newData = [
            { id: "won", label: "won", value: data.won, color: "#a7f432" },
            { id: "lost", label: "lost", value: data.totalMatches - data.won, color: "#ce2029" }
        ]

        return newData;
    }

    const dataChart = useMemo(() => getWins(teamName, yearsLeagueAll, matchDataAll), [teamName, yearsLeagueAll, matchDataAll]);
    const dataPie = getDataPie(2017, dataChart);
    const dataBar = Object.keys(dataChart).map((key) => {
        return { year: key, won: dataChart[key].won };
    })

    console.log(`dataPie:`, dataPie);

    useEffect(() => {
        window.scrollTo(0, 0);

        setTeamNamesAll([...teamNames]);
        setMatchDataAll([...matchData]);
        setLeagueYearsAll([...yearsLeague]);

    }, []);

    const [{ teamLogo }] = teamNamesAll?.filter((team) => team.teamFullName === teamName);



    return (
        <>
            <Navbar />
            <main className='flex jc-center'>
                <div className="container__main__teamSummary mb-4 p-3">

                    <div className="teamSummary__heading txt-center">
                        Team Sumamry
                    </div>

                    <div className="teamSummary__teamInfo flex flex-col a-item-center jc-center">
                        <div className="teamSummary__teamLogo">
                            <img src={teamLogo} alt={`${teamName}__logo`} />
                        </div>
                        <div className='teamSummary__teamName' >{teamName}</div>
                    </div>

                    <div className="teamSummary__chartsArea flex flex-col jc-center a-item-center">

                        <div className="chartPie__teamSummary mt-1 mb-1">
                            <div className="chartPie__heading txt-center">
                                Wins And Losses
                            </div>
                        </div>

                    </div>

                    <div className="container__pieGraph">
                        <div className="pieGraph__heading txt-center ">Season- 2017(Latest)</div>
                        {dataPie[0].value === 0 ?
                            <div className="txt-center mt-4">
                                <h2>Team Did not played this Season</h2>
                            </div>
                            :
                            <PieGraph {...{ dataPie }} />
                        }
                    </div>

                    <div className="container__barGraph">
                        <div className="barGraph__heading txt-center">Previous Seasons</div>
                        <BarGraph {...{ dataBar }} />
                    </div>

                </div>



            </main>
        </>
    )
}

export default TeamSummary;