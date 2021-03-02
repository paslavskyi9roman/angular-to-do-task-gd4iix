import { Component } from "@angular/core";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public todos: Todo[] = [
    { id: 1, title: "Call mom", completed: false },
    { id: 2, title: "Cook a dinner", completed: true },
    { id: 3, title: "Learn spanish", completed: false }
  ];

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
