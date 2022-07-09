import React from 'react';
import { Homepage, MatchSummary } from './pages';
import { Routes, Route } from 'react-router-dom';
import TeamSummary from './pages/TeamSummary/TeamSummary';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/matchSummary/:matchID' element={<MatchSummary />} />
        <Route path='/teamSummary/:teamName' element={<TeamSummary />} />
      </Routes>
    </>
  );
}

export default App;
