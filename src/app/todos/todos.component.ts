import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TodoService } from "../shared/todos.service";
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  private search = "";

  constructor(private todosService: TodoService) {}

  ngOnInit() {}

  changeHandler(id: number) {
    this.todosService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }

  removeAllTodo() {
    this.todosService.removeAllTodo();
  }
}
