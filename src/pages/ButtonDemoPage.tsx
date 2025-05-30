import React from 'react';
import { Button } from '@/components/Button';

const ButtonDemoPage: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-6">Демонстрация компонента Button</h2>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Варианты кнопок</h3>
        <div className="flex gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Размеры кнопок</h3>
        <div className="flex items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Состояния кнопок</h3>
        <div className="flex gap-4">
          <Button isLoading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button fullWidth>Full Width</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Кнопки с иконками</h3>
        <div className="flex gap-4">
          <Button
            leftIcon={<span>←</span>}
            variant="primary"
          >
            Back
          </Button>
          <Button
            rightIcon={<span>→</span>}
            variant="primary"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemoPage; 