import React, { Children, cloneElement, isValidElement } from 'react';
import type { ReactElement } from 'react';
import type { ButtonProps } from './Button';

export interface ButtonGroupProps {
  children: React.ReactNode;
  gap?: 8 | 16 | 24;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, gap = 8, size = 'md', fullWidth = false }) => {
  // Применяем одинаковый размер только к Button
  const sizedChildren = Children.map(children, (child) => {
    if (isValidElement(child) && (child as ReactElement<ButtonProps>).props.size !== undefined) {
      return cloneElement(child as ReactElement<ButtonProps>, { size, fullWidth });
    }
    return child;
  });

  return (
    <div style={{ display: 'flex', gap, width: fullWidth ? '100%' : undefined }}>
      {sizedChildren}
    </div>
  );
}; 