import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Todo } from "../app.component";
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() onToggle = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  changeHandler(id: number) {
    this.onToggle.emit(id);
  }
}
