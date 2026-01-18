import { InputHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/classNames';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: ReactNode;
}

export function TextInput({
  label,
  error,
  hint,
  icon,
  className,
  id,
  ...props
}: TextInputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-xs font-semibold text-system-text-primary">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-system-text-tertiary">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          className={cx(
            'w-full px-3 py-2 rounded-md border transition-colors duration-200',
            'font-primary text-sm text-system-text-primary bg-background-primary',
            'border-system-border-light',
            'focus:outline-none focus:border-variant-primary focus:ring-2 focus:ring-variant-light',
            'disabled:bg-background-tertiary disabled:text-system-text-tertiary disabled:cursor-not-allowed',
            'placeholder:text-system-text-tertiary',
            error && 'border-alert-primary focus:border-alert-primary focus:ring-alert-light',
            icon && 'pl-10',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-alert-text">{error}</p>}
      {hint && !error && <p className="text-xs text-system-text-tertiary">{hint}</p>}
    </div>
  );
}
