import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-rx-example',
  templateUrl: './rx-example.component.html',
  styleUrls: ['./rx-example.component.css']
})
export class RxExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // 事件
    const rxBox = document.querySelector('.rx-box');

    const mouseMove = fromEvent(rxBox, 'mousemove');

    const subscription = mouseMove.subscribe((evt: MouseEvent) => {
      console.log(`x: ${evt.offsetX}, y: ${evt.offsetY}`);

      if (evt.offsetX < 40 && evt.offsetY < 40) {
        subscription.unsubscribe();
      }
    });

    // ajax调用
    const apiData = ajax('https://api.apiopen.top/musicDetails?id=604392760');

    apiData.subscribe(({ status, response}) => {
      console.log(status, response);
    });

  }

  clickRxBox(e) {
    console.log(e.clientX, e.clientY, e.offsetY);
  }

}
