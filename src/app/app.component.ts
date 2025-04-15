import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'praveen kumar';
  today: Date = new Date();
  price: number = 12345.6789;
  percentage: number = 0.75;
  fruits: string[] = ['apple', 'banana', 'mango', 'orange'];
  user = {
    name: 'Praveen',
    role: 'developer'
  };
}




