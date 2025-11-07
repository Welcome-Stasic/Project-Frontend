import { makeAutoObservable } from "mobx";
import type { Task, Progress, CreateTaskData } from "./types";


class TaskStore {
  tasks: Task[] = [
    {
      id: "1",
      title: "Mobile App Research",
      date: "4 Oct",
      type: "today",
      category: "research",
      completed: false,
      priority: "medium",
      createdAt: new Date().toISOString()
    },
    {
      id: "2",
      title: "Prepare Wireframe for Main Flow", 
      date: "4 Oct",
      type: "today",
      category: "design",
      completed: true,
      priority: "high",
      createdAt: new Date().toISOString()
    }
  ];

    constructor() {
        makeAutoObservable(this);
    }

    toggleTask = (taskId: string) => {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = true;
        }
    };

    addTask = (taskData: CreateTaskData) => {
        const newTask: Task = {
            id: Date.now().toString(),
            title: taskData.title,
            completed: false,
            date: taskData.type === 'today' ? 'A Oct' : 'S Oct',
            type: taskData.type,
            category: taskData.category,
            priority: taskData.priority,
            description: taskData.description,
            createdAt: new Date().toISOString()
        };
        this.tasks.push(newTask);
        return newTask;
    };
    get todayProgress(): Progress {
        const todayTasks = this.tasks.filter(task => task.type === 'today');
        const total = todayTasks.length;
        const completed = todayTasks.filter(task => task.completed).length;
    
        return {
            total,
            completed,
            procent: total > 0 ? Math.round((completed / total) * 100) : 0
        };
    }

    get todayTasks(): Task[] {
        return this.tasks.filter(task => task.type === 'today');
    }

    get tomorrowTasks(): Task[] {
        return this.tasks.filter(task => task.type === 'tomorrow');
    }
}

const taskStore = new TaskStore();
export default taskStore;