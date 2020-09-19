import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  template:`
   <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">

    <p>{{value}}</p>

  `,
  styleUrls: ['./box.component.sass']
})
export class BoxComponent {
  value = '';
  update(value: string) { this.value = value; }
}



