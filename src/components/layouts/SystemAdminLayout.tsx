import { ReactNode } from 'react';

export interface SystemAdminLayoutProps {
  sidebarContent: ReactNode;
  mainContent: ReactNode;
}

export function SystemAdminLayout({
  sidebarContent,
  mainContent,
}: SystemAdminLayoutProps) {
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen gap-0 bg-background-primary">
      {/* Left Sidebar - Navigation/Filters */}
      <div className="border-r border-system-border-light bg-surface-primary overflow-y-auto">
        {sidebarContent}
      </div>

      {/* Main Content - Registry Table */}
      <div className="overflow-y-auto">
        {mainContent}
      </div>
    </div>
  );
}
