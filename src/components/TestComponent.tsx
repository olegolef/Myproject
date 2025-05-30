import React from 'react';

interface TestComponentProps {
  title: string;
}

export const TestComponent: React.FC<TestComponentProps> = ({ title }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow border-4 border-dashed border-blue-500">
      <h1 className="text-xl font-bold text-blue-700">{title}</h1>
    </div>
  );
};
