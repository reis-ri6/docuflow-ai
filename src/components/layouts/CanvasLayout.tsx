import { ReactNode } from 'react';

export interface CanvasLayoutProps {
  children?: ReactNode;
  sidebarContent: ReactNode;
  canvasContent: ReactNode;
  inspectorContent?: ReactNode;
}

export function CanvasLayout({
  sidebarContent,
  canvasContent,
  inspectorContent,
}: CanvasLayoutProps) {
  return (
    <div className="grid grid-cols-[250px_1fr_300px] h-screen gap-0 bg-background-primary">
      {/* Left Sidebar */}
      <div className="border-r border-system-border-light bg-surface-primary overflow-y-auto">
        {sidebarContent}
      </div>

      {/* Main Canvas Area */}
      <div className="bg-background-secondary overflow-auto">
        {canvasContent}
      </div>

      {/* Right Inspector Panel */}
      <div className="border-l border-system-border-light bg-surface-primary overflow-y-auto">
        {inspectorContent}
      </div>
    </div>
  );
}
