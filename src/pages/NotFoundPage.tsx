import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4 text-red-600">404 — Страница не найдена</h2>
      <p>Проверьте адрес или вернитесь на главную.</p>
    </div>
  );
};

export default NotFoundPage; 