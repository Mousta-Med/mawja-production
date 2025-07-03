import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NotFound from './NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter; 