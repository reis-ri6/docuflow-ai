import { cx } from '../../utils/classNames';

export interface VariablePlaceholderProps {
  name: string;
  onClick?: () => void;
  className?: string;
}

export function VariablePlaceholder({ name, onClick, className }: VariablePlaceholderProps) {
  return (
    <span
      className={cx(
        'font-mono text-sm px-1 py-0.5 rounded cursor-pointer transition-all select-none',
        'bg-canonical-light border border-dashed border-canonical-primary',
        'hover:bg-canonical-dark/10 hover:shadow-sm',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      title={`Click to inspect: ${name}`}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {`{{${name}}}`}
    </span>
  );
}
