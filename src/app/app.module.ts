import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TodosComponent } from "./todos/todos.component";
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodosFilterPipe } from "./shared/todos-filter.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TodosComponent,
    CreateTodoComponent,
    TodosFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
