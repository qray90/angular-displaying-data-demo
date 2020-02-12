import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface Item {
  name: string;
  age: number;
  event: any;
}

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Output() alertEmitter = new EventEmitter<Item>();

  constructor() {}

  ngOnInit(): void {}

  handleClick($event) {
    this.alertEmitter.emit({ name: '小明', age: 21, event: $event });
  }
}
