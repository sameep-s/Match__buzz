export function getWins(teamName, yearsLeague, matchData) {

    const data = matchData.reduce((acc, curr) => {

        acc[curr.season] || (acc[curr.season] = { totalMatches: 0, won: 0 });

        yearsLeague.forEach((year) => {
            if (curr.season === year && (curr.team1 === teamName || curr.team2 === teamName) && curr.winner === teamName) {
                acc[year].totalMatches++ && acc[year].won++;
            }

            else if (curr.season === year && (curr.team1 === teamName || curr.team2 === teamName)) {
                acc[year].totalMatches++;
            }
        });


        return acc;
    }, {})

    return data;
}