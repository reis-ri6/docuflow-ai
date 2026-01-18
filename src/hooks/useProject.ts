import { useState, useCallback } from 'react';
import { Variable, Document, Agent, Chunk } from '../types';
import { MOCK_PROJECT, MOCK_ACTIVITY } from '../data/mockData';

export function useProject(projectId: string) {
  const [project, setProject] = useState(MOCK_PROJECT);
  const [activities] = useState(MOCK_ACTIVITY);

  const updateVariable = useCallback((key: string, updates: Partial<Variable>) => {
    setProject((prev) => ({
      ...prev,
      variables: prev.variables.map((v) =>
        v.key === key
          ? {
              ...v,
              ...updates,
              lastModified: new Date().toISOString(),
            }
          : v
      ),
    }));
  }, []);

  const deleteVariable = useCallback((key: string) => {
    setProject((prev) => ({
      ...prev,
      variables: prev.variables.filter((v) => v.key !== key),
    }));
  }, []);

  const addVariable = useCallback((variable: Variable) => {
    setProject((prev) => ({
      ...prev,
      variables: [...prev.variables, variable],
    }));
  }, []);

  const updateDocument = useCallback((docId: string, updates: Partial<Document>) => {
    setProject((prev) => ({
      ...prev,
      documents: prev.documents.map((d) =>
        d.id === docId
          ? {
              ...d,
              ...updates,
              lastModified: new Date().toISOString(),
            }
          : d
      ),
    }));
  }, []);

  const updateChunk = useCallback((docId: string, chunkId: string, content: string) => {
    setProject((prev) => ({
      ...prev,
      documents: prev.documents.map((d) =>
        d.id === docId
          ? {
              ...d,
              chunks: d.chunks.map((c) =>
                c.id === chunkId
                  ? { ...c, content }
                  : c
              ),
              lastModified: new Date().toISOString(),
            }
          : d
      ),
    }));
  }, []);

  const deleteChunk = useCallback((docId: string, chunkId: string) => {
    setProject((prev) => ({
      ...prev,
      documents: prev.documents.map((d) =>
        d.id === docId
          ? {
              ...d,
              chunks: d.chunks.filter((c) => c.id !== chunkId),
            }
          : d
      ),
    }));
  }, []);

  const addChunk = useCallback((docId: string, chunk: Chunk) => {
    setProject((prev) => ({
      ...prev,
      documents: prev.documents.map((d) =>
        d.id === docId
          ? {
              ...d,
              chunks: [...d.chunks, chunk],
            }
          : d
      ),
    }));
  }, []);

  const updateAgent = useCallback((agentId: string, updates: Partial<Agent>) => {
    setProject((prev) => ({
      ...prev,
      agents: prev.agents.map((a) =>
        a.id === agentId ? { ...a, ...updates } : a
      ),
    }));
  }, []);

  const moveAgent = useCallback((agentId: string, x: number, y: number) => {
    setProject((prev) => ({
      ...prev,
      agents: prev.agents.map((a) =>
        a.id === agentId ? { ...a, x, y } : a
      ),
    }));
  }, []);

  return {
    project,
    activities,
    updateVariable,
    deleteVariable,
    addVariable,
    updateDocument,
    updateChunk,
    deleteChunk,
    addChunk,
    updateAgent,
    moveAgent,
  };
}
