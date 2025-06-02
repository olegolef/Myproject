import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="p-8">
      <div className="bg-primary text-white p-4 rounded mb-4">Проверка кастомного цвета primary (#2E87FF)</div>
      <h2 className="text-2xl font-bold mb-4">Главная страница</h2>
      <p>Добро пожаловать в систему отчетов о проделанной работе!</p>
    </div>
  );
};

export default HomePage; 