import React from 'react';
import { Homepage, MatchSummary } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/matchSummary/:match_ID' element={<MatchSummary />} />
      </Routes>
    </>
  );
}

export default App;
