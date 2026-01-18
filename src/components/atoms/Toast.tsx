import { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { cx } from '../../utils/classNames';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastProps {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

export function Toast({ id, type, message, duration = 5000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(id), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const config = {
    success: {
      icon: CheckCircle,
      bg: 'bg-canonical-light',
      border: 'border-canonical-primary',
      text: 'text-canonical-text',
    },
    error: {
      icon: AlertCircle,
      bg: 'bg-alert-light',
      border: 'border-alert-primary',
      text: 'text-alert-text',
    },
    warning: {
      icon: AlertCircle,
      bg: 'bg-candidate-light',
      border: 'border-candidate-primary',
      text: 'text-candidate-text',
    },
    info: {
      icon: Info,
      bg: 'bg-variant-light',
      border: 'border-variant-primary',
      text: 'text-variant-text',
    },
  };

  const { icon: Icon, bg, border, text } = config[type];

  return (
    <div
      className={cx(
        'flex items-start gap-3 px-4 py-3 rounded-md border-l-4 shadow-lg mb-3 min-w-[300px] max-w-[500px]',
        'bg-surface-primary transition-all duration-300',
        border,
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      )}
    >
      <Icon size={20} className={text} />
      <p className="flex-1 text-sm text-system-text-primary">{message}</p>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(() => onClose(id), 300);
        }}
        className="text-system-text-tertiary hover:text-system-text-primary transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}
