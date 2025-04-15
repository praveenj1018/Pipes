import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppendPipe } from './custom.pipe';
@Component({
  selector: 'app-root',
  imports: [
 AppendPipe,CommonModule,
  ],  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'praveen kumar';
  today: Date = new Date();
  price: number = 12345.6789;
  percentage: number = 0.75;
  fruits: string[] = ['apple', 'banana', 'mango', 'orange'];
 
}




