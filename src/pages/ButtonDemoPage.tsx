import React from 'react';
import { Button } from '@/components/Button';
import { ButtonGroup } from '@/components/Button/ButtonGroup';
import { Icon } from '@/shared/icons/Icon';

const ButtonDemoPage: React.FC = () => {
  return (
    <div style={{ padding: 32 }}>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>Демонстрация компонента Button</h2>

      <div style={{ marginBottom: 32 }}>
        <h3 style={{ fontSize: 20, fontWeight: 600 }}>SVG-иконки из Figma</h3>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', marginBottom: 16 }}>
          <div style={{ textAlign: 'center' }}>
            <Icon name="add-plus" size={40} />
            <div style={{ fontSize: 12, marginTop: 4 }}>add-plus</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Icon name="google-play" size={40} />
            <div style={{ fontSize: 12, marginTop: 4 }}>google-play</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Icon name="apple" size={40} />
            <div style={{ fontSize: 12, marginTop: 4 }}>apple</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Icon name="rustore" size={40} />
            <div style={{ fontSize: 12, marginTop: 4 }}>rustore</div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <h3 style={{ fontSize: 20, fontWeight: 600 }}>Кнопки с иконками из Figma</h3>
        <ButtonGroup gap={16} size="lg">
          <Button leftIcon={<Icon name="add-plus" />} variant="primary">Добавить</Button>
          <Button leftIcon={<Icon name="google-play" />} variant="secondary">Google Play</Button>
          <Button leftIcon={<Icon name="apple" />} variant="secondary">App Store</Button>
          <Button leftIcon={<Icon name="rustore" />} variant="secondary">RuStore</Button>
        </ButtonGroup>
      </div>

      <div style={{ marginBottom: 32 }}>
        <h3 style={{ fontSize: 20, fontWeight: 600 }}>Группы кнопок (одинаковый размер, разные gap)</h3>
        <ButtonGroup gap={8} size="md">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </ButtonGroup>
        <div style={{ marginTop: 12 }}>
          <ButtonGroup gap={16} size="lg">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </ButtonGroup>
        </div>
        <div style={{ marginTop: 12 }}>
          <ButtonGroup gap={24} size="xl">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </ButtonGroup>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <h3 style={{ fontSize: 20, fontWeight: 600 }}>Минимальная ширина и высота</h3>
        <ButtonGroup gap={16} size="sm">
          <Button>OK</Button>
          <Button minWidth={120}>minWidth 120px</Button>
        </ButtonGroup>
      </div>

      <div style={{ marginBottom: 32 }}>
        <h3 style={{ fontSize: 20, fontWeight: 600 }}>Скругления, тени, обводка</h3>
        <ButtonGroup gap={16} size="md">
          <Button radius={4} shadow>Скругление 4px, тень</Button>
          <Button radius={8} bordered>Скругление 8px, обводка</Button>
        </ButtonGroup>
      </div>

      <div style={{ marginBottom: 32 }}>
        <h3 style={{ fontSize: 20, fontWeight: 600 }}>Кнопки с иконками и двухстрочным текстом</h3>
        <ButtonGroup gap={16} size="lg">
          <Button leftIcon={<span>←</span>} twoLines>Назад<br />на предыдущий шаг</Button>
          <Button rightIcon={<span>→</span>} twoLines>Далее<br />к следующему шагу</Button>
        </ButtonGroup>
      </div>

      <div style={{ marginBottom: 32 }}>
        <h3 style={{ fontSize: 20, fontWeight: 600 }}>Текстовые кнопки</h3>
        <ButtonGroup gap={8} size="md">
          <Button variant="text">Подробнее</Button>
          <Button variant="text" leftIcon={<span>+</span>}>Добавить</Button>
        </ButtonGroup>
      </div>

      <div style={{ marginBottom: 32 }}>
        <h3 style={{ fontSize: 20, fontWeight: 600 }}>Состояния</h3>
        <ButtonGroup gap={16} size="md">
          <Button isLoading>Loading</Button>
          <Button disabled>Disabled</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default ButtonDemoPage; 