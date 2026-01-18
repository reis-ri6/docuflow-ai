import { cx } from '../../utils/classNames';

export interface BadgeProps {
  label: string;
  type?: 'default' | 'status' | 'version';
  className?: string;
}

export function Badge({ label, type = 'default', className }: BadgeProps) {
  const typeClasses = {
    default: 'bg-background-tertiary text-system-text-secondary',
    status: 'bg-variant-light text-variant-text',
    version: 'bg-canonical-light text-canonical-text',
  };

  return (
    <span
      className={cx(
        'inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm',
        'text-xs font-semibold whitespace-nowrap',
        typeClasses[type],
        className
      )}
      data-type={type}
    >
      {label}
    </span>
  );
}
