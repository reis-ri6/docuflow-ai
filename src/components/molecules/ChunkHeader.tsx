import { ChunkIDLabel, IconButton } from '../atoms';
import { Pencil, Trash2, Clock } from 'lucide-react';

export interface ChunkHeaderProps {
  chunkId: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onHistory?: () => void;
}

export function ChunkHeader({ chunkId, onEdit, onDelete, onHistory }: ChunkHeaderProps) {
  return (
    <div className="absolute top-0 right-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <ChunkIDLabel chunkId={chunkId} />
      <div className="flex gap-0.5 bg-white/80 backdrop-blur-sm rounded px-1 py-1 shadow-sm border border-system-border-light">
        {onEdit && (
          <IconButton
            icon={<Pencil size={14} />}
            action="edit"
            label="Редагувати чанк"
            size="sm"
            onClick={onEdit}
          />
        )}
        {onHistory && (
          <IconButton
            icon={<Clock size={14} />}
            action="history"
            label="Історія версій"
            size="sm"
            onClick={onHistory}
          />
        )}
        {onDelete && (
          <IconButton
            icon={<Trash2 size={14} />}
            action="delete"
            label="Видалити чанк"
            size="sm"
            variant="danger"
            onClick={() => {
              if (confirm('Видалити цей чанк?')) {
                onDelete();
              }
            }}
          />
        )}
      </div>
    </div>
  );
}
