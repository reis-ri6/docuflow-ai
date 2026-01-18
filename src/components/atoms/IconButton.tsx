import { ReactNode } from 'react';
import { cx } from '../../utils/classNames';

export interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  action: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'danger';
  className?: string;
  disabled?: boolean;
}

export function IconButton({
  icon,
  onClick,
  action,
  label,
  size = 'md',
  variant = 'default',
  className,
  disabled = false,
}: IconButtonProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const variantClasses = {
    default: 'text-system-text-secondary hover:bg-surface-elevated hover:text-variant-primary',
    primary: 'text-variant-primary hover:bg-variant-light',
    danger: 'text-alert-text hover:bg-alert-light',
  };

  return (
    <button
      className={cx(
        'rounded-md flex items-center justify-center transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-variant-primary focus:ring-offset-1',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size],
        !disabled && variantClasses[variant],
        className
      )}
      onClick={onClick}
      disabled={disabled}
      aria-label={label || action}
      title={label || action}
      data-action={action}
    >
      {icon}
    </button>
  );
}
