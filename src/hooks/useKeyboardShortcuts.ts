import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useKeyboardShortcuts(callbacks: {
  onSearch?: () => void;
  onSave?: () => void;
  onNew?: () => void;
  onHelp?: () => void;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K - Search
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        callbacks.onSearch?.();
      }

      // Ctrl+S - Save
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        callbacks.onSave?.();
      }

      // Ctrl+N - New
      if (e.ctrlKey && e.key === 'n') {
        e.preventDefault();
        callbacks.onNew?.();
      }

      // ? - Help
      if (e.key === '?' && !e.ctrlKey && !e.shiftKey && !e.altKey) {
        const target = e.target as HTMLElement;
        // Don't trigger if user is typing in input
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          callbacks.onHelp?.();
        }
      }

      // Ctrl+1 - Dashboard
      if (e.ctrlKey && e.key === '1') {
        e.preventDefault();
        navigate('/project/project-001/dashboard');
      }

      // Ctrl+2 - Canvas
      if (e.ctrlKey && e.key === '2') {
        e.preventDefault();
        navigate('/project/project-001/canvas');
      }

      // Ctrl+3 - Documents
      if (e.ctrlKey && e.key === '3') {
        e.preventDefault();
        navigate('/project/project-001/document/doc-001');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [callbacks, navigate]);
}