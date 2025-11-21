import { makeAutoObservable } from "mobx";
import type { Task, Progress, CreateTaskData } from "../../types/typesTask";

class TaskStore {
  tasks: Task[] = [
    {
      id: "1",
      title: "Mobile App Research",
      dueDate: new Date().toISOString().split("T")[0],
      type: "today",
      completed: false,
      priority: "medium",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Prepare Wireframe for Main Flow",
      dueDate: new Date().toISOString().split("T")[0],
      type: "today",
      completed: true,
      priority: "high",
      createdAt: new Date().toISOString(),
    },
    {
      id: "3",
      title: "Prepare Wireframe for Main Flow",
      dueDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
      type: "tomorrow",
      completed: false,
      priority: "medium",
      createdAt: new Date().toISOString(),
    },
  ];

  searchText: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  searchTextFilter = (query: string) => {
    this.searchText = query.toLowerCase().trim();
  };

  get filterTasks(): Task[] {
    if (!this.searchText) {
      return this.tasks;
    }
    return this.tasks.filter((t) =>
      t.title.toLowerCase().includes(this.searchText)
    );
  }

  toggleTask = (taskId: string) => {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      task.type = this.getTaskType(task.dueDate);
    }
  };

  addTask = (taskData: CreateTaskData) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: taskData.title,
      completed: false,
      dueDate: taskData.dueDate,
      type: this.getTaskType(taskData.dueDate),
      priority: taskData.priority,
      description: taskData.description,
      createdAt: new Date().toISOString(),
    };
    this.tasks.push(newTask);
    return newTask;
  };

  updateTask = (taskId: string, taskData: Partial<Task>) => {
    const taskIndex = this.tasks.findIndex((t) => t.id === taskId);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = {
        ...this.tasks[taskIndex],
        ...taskData,
        type: taskData.dueDate
          ? this.getTaskType(taskData.dueDate)
          : this.tasks[taskIndex].type,
      };
    }
  };
  deleteTask = (taskId: string) => {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  };

  private getTaskType(dueDate: string): "today" | "tomorrow" | "future" {
    const today = new Date().toISOString().split("T")[0];
    const tomorrow = new Date(Date.now() + 86400000)
      .toISOString()
      .split("T")[0];

    if (dueDate === today) return "today";
    if (dueDate === tomorrow) return "tomorrow";
    return "future";
  }

  getDisplayDate(dueDate: string): string {
    const date = new Date(dueDate);
    const day = date.getDate();
    const month = date.toLocaleString("en", { month: "short" });
    return `${day} ${month}`;
  }

  get groupedTasks() {
    const today = new Date().toISOString().split("T")[0];
    const tomorrow = new Date(Date.now() + 86400000)
      .toISOString()
      .split("T")[0];

    const grouped = {
      today: this.tasks.filter((task) => task.dueDate === today),
      tomorrow: this.tasks.filter((task) => task.dueDate === tomorrow),
      future: this.tasks
        .filter((t) => t.dueDate > tomorrow)
        .sort(
          (a, b) =>
            new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        ),
    };

    return grouped;
  }

  get todayProgress(): Progress {
    const todayTasks = this.groupedTasks.today;
    const total = todayTasks.length;
    const completed = todayTasks.filter((task) => task.completed).length;

    return {
      total,
      completed,
      procent: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  }

  get todayTasks(): Task[] {
    return this.groupedTasks.today;
  }
  get todayTasksComplete(): Task[] {
    return this.groupedTasks.today.filter((t) => t.completed === false);
  }

  get tomorrowTasks(): Task[] {
    return this.groupedTasks.tomorrow;
  }

  get futureTasks(): Task[] {
    return this.groupedTasks.future;
  }
}

const taskStore = new TaskStore();
export default taskStore;
