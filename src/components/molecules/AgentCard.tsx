import { Status } from '../../types';
import { StatusTag } from '../atoms';
import { cx } from '../../utils/classNames';
import { Bot } from 'lucide-react';

export interface AgentCardProps {
  agentId: string;
  agentName: string;
  agentRole: string;
  status: Status;
  icon?: string;
  onDragStart?: (e: React.DragEvent) => void;
  onClick?: () => void;
  isDragging?: boolean;
}

export function AgentCard({
  agentId,
  agentName,
  agentRole,
  status,
  icon,
  onDragStart,
  onClick,
  isDragging = false,
}: AgentCardProps) {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('agentId', agentId);
    e.dataTransfer.setData('agentName', agentName);
    onDragStart?.(e);
  };

  return (
    <div
      className={cx(
        'p-4 rounded-md bg-surface-elevated border border-system-border-light',
        'shadow-sm hover:shadow-md transition-all duration-200',
        'min-w-[180px] flex flex-col gap-2',
        onDragStart && 'cursor-grab active:cursor-grabbing',
        onClick && 'cursor-pointer',
        !isDragging && 'hover:border-variant-primary hover:scale-105',
        isDragging && 'opacity-80 scale-95'
      )}
      draggable={!!onDragStart}
      onDragStart={handleDragStart}
      onClick={onClick}
      data-agent-id={agentId}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-variant-light flex items-center justify-center flex-shrink-0">
          {icon ? (
            <span className="text-lg">{icon}</span>
          ) : (
            <Bot size={18} className="text-variant-primary" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm text-system-text-primary truncate">
            {agentName}
          </h4>
          <p className="text-xs text-system-text-secondary line-clamp-2">{agentRole}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <StatusTag status={status} showIcon={false} />
      </div>
    </div>
  );
}
