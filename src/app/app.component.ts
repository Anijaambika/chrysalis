import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title='app'
  items: Array<any> = []

  constructor() {
    this.items = [
      { name: 'assets/images/thumb1.jpg' },
      { name: 'assets/images/thumb2.jpg' },
      {name:'assets/images/thumb3.jpg'},
    
    ]
  }
}