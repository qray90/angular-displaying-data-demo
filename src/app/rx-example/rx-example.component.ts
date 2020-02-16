import { Component, OnInit } from '@angular/core';
import { fromEvent, of, pipe, Observable } from 'rxjs';

import { ajax } from 'rxjs/ajax';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-rx-example',
  templateUrl: './rx-example.component.html',
  styleUrls: ['./rx-example.component.css']
})
export class RxExampleComponent implements OnInit {
  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

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

    apiData.subscribe(({ status, response }) => {
      console.log(status, response);
    });

    // 操作符
    // of(1, 2, 3, 4, 5)
    //   .pipe(
    //     filter(n => n % 2 === 0),
    //     map(n => n * n)
    //   )
    //   .subscribe(x => console.log(x));

    const nums = of(1, 2, 3, 4, 5);
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );  // 返回新函数？？

    const squareOdd = squareOddVals(nums); // 函数式编程？？？？

    squareOdd.subscribe(x => console.log(x));
  }

  clickRxBox(e) {
    console.log(e.clientX, e.clientY, e.offsetY);
  }
}
