import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import RocketList from './RocketList';

export default function App() {
  // const example = data.results[0];

  return (
    <>
      <Header />
      <Routes>

        {/* <Route path="/" element={<StudentsComponent students={students} />} /> */}
        {/* {options.results.0.name} */}
        <Route path="/" element={<RocketList />} />
      </Routes>
    </>
  );
}
