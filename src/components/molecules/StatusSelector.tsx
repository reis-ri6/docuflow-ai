import { Status } from '../../types';
import { StatusTag } from '../atoms';
import { cx } from '../../utils/classNames';

export interface StatusSelectorProps {
  currentStatus: Status;
  onStatusChange: (newStatus: Status) => void;
  disabled?: boolean;
}

const STATUS_TRANSITIONS: Record<Status, Status[]> = {
  Canonical: ['Candidate', 'Archived'],
  Candidate: ['Canonical', 'Variant', 'Archived'],
  Variant: ['Candidate', 'Archived'],
  Archived: ['Candidate'],
};

export function StatusSelector({
  currentStatus,
  onStatusChange,
  disabled = false,
}: StatusSelectorProps) {
  const validTransitions = STATUS_TRANSITIONS[currentStatus];
  const allStatuses: Status[] = ['Canonical', 'Candidate', 'Variant', 'Archived'];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as Status;
    
    // Confirm destructive changes
    if (newStatus === 'Archived') {
      if (!confirm(`Архівувати цей елемент? Це можна буде скасувати пізніше.`)) {
        return;
      }
    }
    
    onStatusChange(newStatus);
  };

  return (
    <div className="flex items-center gap-2">
      <label className="text-xs font-semibold text-system-text-secondary">Статус:</label>
      <div className="flex items-center gap-2">
        <StatusTag status={currentStatus} />
        <select
          value={currentStatus}
          onChange={handleChange}
          disabled={disabled}
          className={cx(
            'px-2 py-1 text-sm rounded border border-system-border-light',
            'bg-background-primary text-system-text-primary',
            'focus:outline-none focus:border-variant-primary focus:ring-2 focus:ring-variant-light',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-colors duration-200'
          )}
        >
          <option value={currentStatus}>{currentStatus}</option>
          {validTransitions.map((status) => (
            <option key={status} value={status}>
              → {status}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
