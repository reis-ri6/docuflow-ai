import { Status } from '../../types';
import { StatusTag } from '../atoms';
import { cx } from '../../utils/classNames';

export interface VariableStatusLabelProps {
  variableKey: string;
  status: Status;
  onClick?: () => void;
}

export function VariableStatusLabel({
  variableKey,
  status,
  onClick,
}: VariableStatusLabelProps) {
  return (
    <div
      className={cx(
        'flex items-center gap-2 px-2 py-1 rounded transition-colors',
        onClick && 'hover:bg-background-tertiary cursor-pointer'
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <code className="font-mono text-sm text-system-text-primary">{variableKey}</code>
      <StatusTag status={status} />
    </div>
  );
}
