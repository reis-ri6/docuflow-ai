import { cx } from '../../utils/classNames';

export interface ChunkIDLabelProps {
  chunkId: string;
  className?: string;
  position?: 'top-right' | 'top-left';
}

export function ChunkIDLabel({
  chunkId,
  className,
  position = 'top-right',
}: ChunkIDLabelProps) {
  const positionClass = position === 'top-right' ? 'top-2 right-2' : 'top-2 left-2';

  return (
    <span
      className={cx(
        'font-mono text-xs text-system-text-tertiary',
        'absolute bg-white/50 backdrop-blur-sm',
        'px-1 py-0.5 rounded border border-dashed border-system-border-light',
        'select-all cursor-text',
        positionClass,
        className
      )}
      data-chunk-id={chunkId}
      title={`Chunk ID: ${chunkId}`}
    >
      #{chunkId}
    </span>
  );
}
