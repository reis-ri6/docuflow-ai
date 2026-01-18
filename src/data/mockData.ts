import { Variable, Document, Agent, Pipeline, Project, ActivityEntry } from '../types';

export const MOCK_VARIABLES: Variable[] = [
  {
    key: 'company_name',
    value: 'DocuFlow AI',
    status: 'Canonical',
    domain: 'Global',
    description: 'Офіційна назва компанії',
    author: 'Олексій Іванов',
    lastModified: '2025-12-10T14:30:00Z',
    versionHistory: [
      {
        timestamp: '2025-12-10T14:30:00Z',
        author: 'Олексій Іванов',
        action: 'оновив значення',
        version: 'v1.2',
        changes: 'Змінено з "DocuFlow" на "DocuFlow AI"',
      },
      {
        timestamp: '2025-12-01T10:15:00Z',
        author: 'Марія Петрова',
        action: 'створив змінну',
        version: 'v1.0',
      },
    ],
  },
  {
    key: 'support_email',
    value: 'support@docuflow.ai',
    status: 'Canonical',
    domain: 'Global',
    description: 'Email для підтримки клієнтів',
    author: 'Марія Петрова',
    lastModified: '2025-11-28T09:20:00Z',
    versionHistory: [
      {
        timestamp: '2025-11-28T09:20:00Z',
        author: 'Марія Петрова',
        action: 'створив змінну',
        version: 'v1.0',
      },
    ],
  },
  {
    key: 'pricing_basic',
    value: '$29/місяць',
    status: 'Candidate',
    domain: 'Marketing',
    description: 'Ціна базового тарифу (на розгляді)',
    author: 'Іван Коваль',
    lastModified: '2025-12-11T16:45:00Z',
    versionHistory: [
      {
        timestamp: '2025-12-11T16:45:00Z',
        author: 'Іван Коваль',
        action: 'запропонував нову ціну',
        version: 'v2.0-candidate',
        changes: 'Підвищення з $25 до $29',
      },
    ],
  },
  {
    key: 'api_endpoint',
    value: 'https://api.docuflow.ai/v2',
    status: 'Variant',
    domain: 'TechDocs',
    description: 'Альтернативний API endpoint для тестування',
    author: 'Дмитро Шевченко',
    lastModified: '2025-12-09T11:00:00Z',
    versionHistory: [
      {
        timestamp: '2025-12-09T11:00:00Z',
        author: 'Дмитро Шевченко',
        action: 'створив варіант',
        version: 'v2.0-variant',
      },
    ],
  },
  {
    key: 'old_brand_name',
    value: 'ContentFlow',
    status: 'Archived',
    domain: 'Marketing',
    description: 'Стара назва бренду (архів)',
    author: 'Олена Сидоренко',
    lastModified: '2025-10-15T08:30:00Z',
    versionHistory: [
      {
        timestamp: '2025-10-15T08:30:00Z',
        author: 'Олена Сидоренко',
        action: 'архівував',
        version: 'v1.0-archived',
      },
    ],
  },
];

export const MOCK_CHUNKS = [
  {
    id: 'A7F3',
    content: 'Ласкаво просимо до {{company_name}}! Наша платформа допомагає автоматизувати створення документації.',
    version: 'v1.0',
    variables: ['company_name'],
    order: 1,
  },
  {
    id: 'B2E9',
    content: 'Якщо у вас виникли питання, зв\'яжіться з нами за адресою {{support_email}}. Базовий тариф доступний за {{pricing_basic}}.',
    version: 'v1.1',
    variables: ['support_email', 'pricing_basic'],
    order: 2,
  },
  {
    id: 'C5K1',
    content: 'API доступний за адресою {{api_endpoint}}. Документацію можна знайти в розділі TechDocs.',
    version: 'v1.0',
    variables: ['api_endpoint'],
    order: 3,
  },
];

export const MOCK_DOCUMENTS: Document[] = [
  {
    id: 'doc-001',
    title: 'Вітальний документ',
    status: 'Canonical',
    chunks: MOCK_CHUNKS,
    variables: ['company_name', 'support_email', 'pricing_basic', 'api_endpoint'],
    author: 'Олексій Іванов',
    lastModified: '2025-12-11T10:00:00Z',
  },
];

export const MOCK_AGENTS: Agent[] = [
  {
    id: 'agent-001',
    name: 'Content Generator',
    role: 'Генерує базовий контент на основі шаблонів',
    status: 'Canonical',
    icon: '📝',
    prompt: 'Generate documentation content based on templates...',
    version: 'v1.2',
    x: 100,
    y: 100,
  },
  {
    id: 'agent-002',
    name: 'Variable Validator',
    role: 'Перевіряє коректність змінних',
    status: 'Canonical',
    icon: '✓',
    prompt: 'Validate all variables in the document...',
    version: 'v1.0',
    x: 400,
    y: 100,
  },
  {
    id: 'agent-003',
    name: 'Translation Agent',
    role: 'Перекладає контент на інші мови',
    status: 'Candidate',
    icon: '🌍',
    prompt: 'Translate content to target language...',
    version: 'v0.9',
    x: 100,
    y: 300,
  },
];

export const MOCK_PIPELINES: Pipeline[] = [
  {
    id: 'pipeline-001',
    name: 'Documentation Generation Pipeline',
    agents: MOCK_AGENTS,
    connections: [
      { from: 'agent-001', to: 'agent-002', type: 'writes' },
      { from: 'agent-002', to: 'agent-003', type: 'verifies' },
    ],
  },
];

export const MOCK_ACTIVITY: ActivityEntry[] = [
  {
    id: 'activity-001',
    timestamp: '2025-12-11T16:45:00Z',
    author: 'Іван Коваль',
    action: 'оновив змінну pricing_basic',
    entityType: 'variable',
    entityId: 'pricing_basic',
    changes: 'Змінено статус на Candidate',
  },
  {
    id: 'activity-002',
    timestamp: '2025-12-11T14:30:00Z',
    author: 'Олексій Іванов',
    action: 'відредагував документ',
    entityType: 'document',
    entityId: 'doc-001',
    changes: 'Додано новий чанк',
  },
  {
    id: 'activity-003',
    timestamp: '2025-12-11T10:15:00Z',
    author: 'Дмитро Шевченко',
    action: 'створив агента Translation Agent',
    entityType: 'agent',
    entityId: 'agent-003',
  },
  {
    id: 'activity-004',
    timestamp: '2025-12-10T18:20:00Z',
    author: 'Марія Петрова',
    action: 'затвердив змінну company_name',
    entityType: 'variable',
    entityId: 'company_name',
    changes: 'Статус змінено на Canonical',
  },
];

export const MOCK_PROJECT: Project = {
  id: 'project-001',
  name: 'DocuFlow AI - MVP',
  status: 'Candidate',
  variables: MOCK_VARIABLES,
  documents: MOCK_DOCUMENTS,
  agents: MOCK_AGENTS,
  pipelines: MOCK_PIPELINES,
  statistics: {
    canonicalVariables: 2,
    candidateDocuments: 1,
    activeAgents: 2,
    pendingReviews: 1,
  },
};
