import React from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonRadius = 4 | 8;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  shadow?: boolean;
  bordered?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  minWidth?: number;
  twoLines?: boolean;
  className?: string;
}

function splitTextToTwoLines(text: string): [string, string] {
  const words = text.split(' ');
  if (words.length < 2) return [text, ''];
  let bestDiff = Infinity;
  let bestSplit = 1;
  for (let i = 1; i < words.length; i++) {
    const first = words.slice(0, i).join(' ');
    const second = words.slice(i).join(' ');
    const diff = Math.abs(first.length - second.length);
    if (diff < bestDiff) {
      bestDiff = diff;
      bestSplit = i;
    }
  }
  return [words.slice(0, bestSplit).join(' '), words.slice(bestSplit).join(' ')];
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  radius = 8,
  shadow = false,
  bordered = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  minWidth,
  twoLines = false,
  className = '',
  disabled,
  ...props
}) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    styles[`rounded${radius}`],
    shadow ? styles.shadow : '',
    fullWidth ? styles.fullWidth : '',
    twoLines ? styles.twoLines : '',
    disabled || isLoading ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style = minWidth ? { minWidth, ...props.style } : props.style;

  let content: React.ReactNode = children;
  if (twoLines && typeof children === 'string') {
    const [line1, line2] = splitTextToTwoLines(children);
    content = (
      <span className={styles.text}>
        {line1}
        <br />
        {line2}
      </span>
    );
  } else if (twoLines) {
    content = <span className={styles.text}>{children}</span>;
  }

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      style={style}
      {...props}
    >
      {isLoading && (
        <span className={styles.icon} style={{ marginRight: 8 }}>
          <svg
            className="animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={20}
            height={20}
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}
      {!isLoading && leftIcon && (
        <span className={`${styles.icon} ${styles.leftIcon}`}>{leftIcon}</span>
      )}
      {content}
      {!isLoading && rightIcon && (
        <span className={`${styles.icon} ${styles.rightIcon}`}>{rightIcon}</span>
      )}
    </button>
  );
}; 