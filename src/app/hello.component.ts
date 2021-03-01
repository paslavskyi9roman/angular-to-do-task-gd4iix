import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h2>Todo</h2>
        <div>
            <input type="text" placeholder="filter tasks">
        <br>
    <span>0 remaining </span>
 
    <ul class="unstyled">
      <li>
        learn angular
      </li>
    </ul>
    
    <form>
      <input type="text">
      <input class="btn-primary" type="submit" value="add">
    </form>
      <a href="">clean</a> 
  </div>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  name:string;
  constructor() {
     this.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false},
      {text:'modify', done:true},
      {text:'test', done:false},
      {text:'close', done:false}
      ];
  }
}
