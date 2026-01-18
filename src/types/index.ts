import { Status } from '../styles/tokens';

// Variable types
export interface Variable {
  key: string;
  value: string;
  status: Status;
  domain: 'Global' | 'Marketing' | 'TechDocs' | 'HR';
  description: string;
  versionHistory: VersionEntry[];
  lastModified: string;
  author: string;
}

export interface VersionEntry {
  timestamp: string;
  author: string;
  action: string;
  version: string;
  changes?: string;
}

// Document types
export interface Document {
  id: string;
  title: string;
  status: Status;
  chunks: Chunk[];
  variables: string[];
  lastModified: string;
  author: string;
}

export interface Chunk {
  id: string;
  content: string;
  version: string;
  variables: string[];
  order: number;
}

// Agent types
export interface Agent {
  id: string;
  name: string;
  role: string;
  status: Status;
  icon?: string;
  prompt: string;
  version: string;
  x?: number;
  y?: number;
}

export interface Connection {
  from: string;
  to: string;
  type: 'reads' | 'writes' | 'verifies';
}

// Pipeline types
export interface Pipeline {
  id: string;
  name: string;
  agents: Agent[];
  connections: Connection[];
}

// Project types
export interface Project {
  id: string;
  name: string;
  status: Status;
  variables: Variable[];
  documents: Document[];
  agents: Agent[];
  pipelines: Pipeline[];
  statistics: ProjectStatistics;
}

export interface ProjectStatistics {
  canonicalVariables: number;
  candidateDocuments: number;
  activeAgents: number;
  pendingReviews: number;
}

// Activity types
export interface ActivityEntry {
  id: string;
  timestamp: string;
  author: string;
  action: string;
  entityType: 'variable' | 'document' | 'agent' | 'pipeline';
  entityId: string;
  changes?: string;
}

export type { Status };
