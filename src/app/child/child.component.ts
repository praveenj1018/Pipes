import { Component, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `<h1>Hello {{name}}</h1>
  <button (click)='sendToParentData()'>Click Me!</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
      @Input() name:string='';
      @Output() sendData: EventEmitter<any>=new EventEmitter<any>();

      sendToParentData(){
        this.sendData.emit("Message successfully delivered to parent");
      }
}
