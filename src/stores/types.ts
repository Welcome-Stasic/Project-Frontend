export interface Task {
  id: string;
  title: string;
  completed: boolean;
  date: string;
  type: 'today' | 'tomorrow';
  category: 'research' | 'design';
}

export interface Progress {
  total: number;
  completed: number;
  percentage: number;
}