import { VersionEntry } from '../../types';
import { Badge } from '../atoms';
import { cx } from '../../utils/classNames';
import { formatDate } from '../../utils/classNames';

export interface VersionHistoryItemProps extends VersionEntry {
  onRestore?: () => void;
  isActive?: boolean;
}

export function VersionHistoryItem({
  timestamp,
  author,
  action,
  version,
  changes,
  onRestore,
  isActive = false,
}: VersionHistoryItemProps) {
  return (
    <div
      className={cx(
        'flex gap-4 pl-4 border-l-2 py-2 transition-colors group',
        isActive ? 'border-variant-primary bg-variant-light/30' : 'border-system-border-light',
        onRestore && 'hover:bg-background-tertiary cursor-pointer'
      )}
      onClick={onRestore}
    >
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <Badge label={version} type="version" />
          <span className="text-xs text-system-text-tertiary">{formatDate(timestamp)}</span>
        </div>
        <div className="text-sm text-system-text-primary">
          <span className="font-semibold">{author}</span>
          <span className="text-system-text-secondary"> {action}</span>
        </div>
        {changes && (
          <div className="text-xs text-system-text-tertiary italic">{changes}</div>
        )}
      </div>
      {onRestore && !isActive && (
        <button
          className="opacity-0 group-hover:opacity-100 text-xs text-variant-primary hover:underline transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            onRestore();
          }}
        >
          Відновити
        </button>
      )}
    </div>
  );
}
