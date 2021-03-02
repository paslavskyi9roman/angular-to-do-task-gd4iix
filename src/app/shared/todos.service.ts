import { Injectable } from "@angular/core";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: "root" })
export class TodoService {
  public todos: Todo[] = [
    { id: 1, title: "Call mom", completed: false },
    { id: 2, title: "Cook a dinner", completed: true },
    { id: 3, title: "Learn spanish", completed: false }
  ];

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
