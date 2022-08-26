import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import RocketList from './RocketList';

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<RocketList />} />
      </Routes>
    </>
  );
}
