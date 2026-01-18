import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/classNames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  loading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-variant-primary text-white hover:bg-variant-dark border-variant-primary',
    secondary:
      'bg-background-primary text-system-text-primary hover:bg-background-tertiary border-system-border-medium',
    danger: 'bg-alert-primary text-white hover:bg-alert-dark border-alert-primary',
    ghost:
      'bg-transparent text-system-text-primary hover:bg-background-tertiary border-transparent',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={cx(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-md border transition-colors duration-200',
        'focus:outline-none focus:ring-2 focus:ring-variant-primary focus:ring-offset-1',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </button>
  );
}
