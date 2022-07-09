import React from 'react'
import { BarGraph, MatchDetails, Navbar, PieGraph } from '../../components';
import './matchSummary.css';

const data = [
    {
        id: "java",
        label: "java",
        value: 195,
        color: "hsl(90, 70%, 50%)"
    },
    {
        id: "erlang",
        label: "erlang",
        value: 419,
        color: "hsl(56, 70%, 50%)"
    },
    {
        id: "ruby",
        label: "ruby",
        value: 407,
        color: "hsl(103, 70%, 50%)"
    },
    {
        id: "haskell",
        label: "haskell",
        value: 474,
        color: "hsl(186, 70%, 50%)"
    },
    {
        id: "go",
        label: "go",
        value: 71,
        color: "hsl(104, 70%, 50%)"
    }
];

const dataBar = [
    {
        day: "Monday",
        degrees: 59
    },
    {
        day: "Tuesday",
        degrees: 61
    },
    {
        day: "Wednesday",
        degrees: 55
    },
    {
        day: "Thursday",
        degrees: 78
    },
    {
        day: "Friday",
        degrees: 71
    },
    {
        day: "Saturday",
        degrees: 56
    },
    {
        day: "Sunday",
        degrees: 67
    }
];

const MatchSummary = () => {
    return (
        <>
            <Navbar />
            <div className="container__main__matchSummary flex flex-col a-item-center jc-center">
                <MatchDetails />
            </div>

            <div className="container__graph mt-4 mb-4 flex jc-center">
                <PieGraph {...{ data }} />
            </div>

            <div className="container__graph mt-4 mb-4 flex jc-center">
                <BarGraph {...{ dataBar }} />
            </div>

        </>
    )
}

export default MatchSummary;