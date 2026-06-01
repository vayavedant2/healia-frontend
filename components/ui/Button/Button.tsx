import styles from './Button.module.scss';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    icon, 
    iconPosition = 'right',
    className = '',
    ...props 
  }, ref) => {
    return (
      <button 
        ref={ref}
        className={`
          ${styles.button} 
          ${styles[`variant-${variant}`]} 
          ${styles[`size-${size}`]} 
          ${className}
        `}
        {...props}
      >
        {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
        <span className={styles.text}>{children}</span>
        {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
