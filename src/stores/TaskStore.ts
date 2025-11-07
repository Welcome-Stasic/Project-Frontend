import { makeAutoObservable } from "mobx";
import type { Task, Progress } from "./types";


class TaskStore {
    tasks: Task[] = [
        {
            id: "1",
            title: "Понять рааботу приложения",
            date: "7 Ноября",
            type: "today",
            category: "research",
            completed: false
        },
        {
            id: "2",
            title: "Подготовить Варфрейм", 
            date: "8 Ноября",
            type: "today",
            category: "design",
            completed: true
        }
    ];

    constructor() {
        makeAutoObservable(this);
    }

    toggleTask = (taskId: string) => {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
        }
    };

    addTask = (title: string, type: 'today' | 'tomorrow' = 'today') => {
        const newTask: Task = {
            id: Date.now().toString(),
            title,
            date: type === 'today' ? 'A Oct' : 'S Oct',
            type,
            category: 'research',
            completed: false
        };
        this.tasks.push(newTask);
    };

    get todayProgress(): Progress {
        const todayTasks = this.tasks.filter(task => task.type === 'today');
        const total = todayTasks.length;
        const completed = todayTasks.filter(task => task.completed).length;
    
        return {
            total,
            completed,
            percentage: total > 0 ? Math.round((completed / total) * 100) : 0
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