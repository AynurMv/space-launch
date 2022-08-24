import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<StudentsComponent students={students} />} /> */}
      <Route path="/" element={<div>Hello world</div>} />
    </Routes>
  );
}