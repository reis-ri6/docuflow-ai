import { createBrowserRouter, Navigate } from 'react-router-dom';
import {
  CanvasModePage,
  DocumentModePage,
  AdminVariablesPage,
  AdminAgentsPage,
  ProjectDashboardPage,
} from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/project/project-001/dashboard" replace />,
  },
  {
    path: '/project/:projectId',
    children: [
      {
        path: 'dashboard',
        element: <ProjectDashboardPage />,
      },
      {
        path: 'canvas',
        element: <CanvasModePage />,
      },
      {
        path: 'document/:documentId',
        element: <DocumentModePage />,
      },
      {
        path: 'admin/variables',
        element: <AdminVariablesPage />,
      },
      {
        path: 'admin/agents',
        element: <AdminAgentsPage />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <div className="flex items-center justify-center h-screen bg-background-primary">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-system-text-primary mb-4">404</h1>
          <p className="text-system-text-secondary mb-6">Сторінку не знайдено</p>
          <a
            href="/"
            className="px-4 py-2 bg-variant-primary text-white rounded hover:bg-variant-dark transition-colors"
          >
            На головну
          </a>
        </div>
      </div>
    ),
  },
]);