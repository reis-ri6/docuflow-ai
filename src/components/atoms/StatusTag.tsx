import { Status } from '../../types';
import { getStatusStyles } from '../../utils/classNames';
import { cx } from '../../utils/classNames';

export interface StatusTagProps {
  status: Status;
  className?: string;
  showIcon?: boolean;
}

export function StatusTag({ status, className, showIcon = true }: StatusTagProps) {
  const styles = getStatusStyles(status);

  return (
    <span
      className={cx(
        'inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs font-semibold whitespace-nowrap select-none transition-opacity hover:opacity-80',
        className
      )}
      style={{
        backgroundColor: styles.bg,
        color: styles.text,
        border: `1px solid ${styles.color}`,
      }}
      data-status={status}
    >
      {showIcon && <span className="text-xs">{styles.icon}</span>}
      <span>{status}</span>
    </span>
  );
}
