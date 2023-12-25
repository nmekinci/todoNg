import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Model,TodoItem } from './model';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo';
  model = new Model();
  isDisplay = false;

  getName(){
    return this.model.user;
  }
  getItems(){
    if (this.isDisplay) {
      return this.model.items;
    } 
    return this.model.items.filter( item => !item.action);
  }

  addItem(value:string) {
    if(value != ""){
      this.model.items.push(new TodoItem(value, false))
    }
  }
}
