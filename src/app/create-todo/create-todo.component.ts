import { Component, OnInit } from "@angular/core";
import { Todo, TodoService } from "../shared/todos.service";

@Component({
  selector: "app-create-todo",
  templateUrl: "./create-todo.component.html",
  styleUrls: ["./create-todo.component.css"]
})
export class CreateTodoComponent implements OnInit {
  title: string = "";

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  addTodo() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false
    };
    this.todoService.addTodo(todo);
  }
}
