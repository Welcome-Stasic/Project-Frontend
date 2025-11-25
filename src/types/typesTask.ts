export interface Task {
  id: string;
  title: string;
  dueDate: string;
  type: 'today' | 'tomorrow' | 'future';
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  description?: string;
}

export interface CreateTaskData {
  title: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  description?: string;
}

export interface Progress {
  total: number;
  completed: number;
  procent: number;
}