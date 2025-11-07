export interface Task {
  id: string;
  title: string;
  completed: boolean;
  date: string;
  type: 'today' | 'tomorrow';
  category: 'research' | 'design';
  priority: 'low' | 'medium' | 'high';
  description?: string;
  createdAt: string;
}

export interface Progress {
  total: number;
  completed: number;
  procent: number;
}

export interface CreateTaskData {
  title: string;
  type: 'today' | 'tomorrow';
  category: 'research' | 'design';
  priority: 'low' | 'medium' | 'high';
  description?: string;
}