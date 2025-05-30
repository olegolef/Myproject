import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ReportsPage from '@/pages/ReportsPage';
import NotFoundPage from '@/pages/NotFoundPage';
import ButtonDemoPage from '@/pages/ButtonDemoPage';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/button-demo" element={<ButtonDemoPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter; 