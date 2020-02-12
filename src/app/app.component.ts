import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <h2>My favorite hero is: {{ myHero.name }}</h2>
    <p>heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>

    <p *ngIf="heroes.length > 3">there are many heroes!</p>

    <h3>Current customer: {{ currentCustomer }}</h3>

    <div>
      <img src="{{ itemImgUrl }}" />
      <img [src]="itemImgUrl" />
    </div>

    <div>this sum of 1 + 1 is {{ 1 + 1 }}</div>

    <div>
      姓名：<input
        #customerInput
        value="sarah"
        on-change="inputChange(customerInput)"
      />
      {{ customerInput.value }}
    </div>

    <div>
      <button
        [attr.id]="help"
        [attr.aria-label]="help"
        (click)="clickHelpButton()"
      >
        帮助{{ help }}
      </button>
    </div>

    <div>插值：{{ evilScript }}</div>
    <div [innerHTML]="evilScript"></div>

    <tr>
      <!-- <td colspan="{{ 1+1 }}"></td> -->
      <td [colSpan]="1 + 1">td 内容</td>
    </tr>

    <div>
      <input
        [value]="currentInput"
        (input)="currentInput = $event.target.value"
      />
      双向数据绑定： {{ currentInput }}
    </div>

    <div>
      自定义属性：
      <app-item-detail (alertEmitter)="alertInfo($event)"></app-item-detail>
    </div>

    <div>
      内置属性指令：
      <div [ngClass]="currentClass">ngClass</div>
      <div [ngStyle]="currentStyle">ngStyle</div>
    </div>

    <div [ngSwitch]="1">
      <div *ngSwitchCase="0">0</div>
      <div *ngSwitchCase="1">1</div>
      <div *ngSwitchDefault>default</div>
    </div>
  `
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];

  help = 'help';

  currentCustomer = this.heroes[0].name;
  itemImgUrl = 'https://angular.cn/assets/images/logos/angular/logo-nav@2x.png';

  evilScript = '<script>alert("evil")</script> script标签外的字符';

  currentInput = 'default';

  currentClass = {};
  currentStyle = {};

  ngOnInit(): void {
    this.setCurrentClass();
    this.setCurrentStyle();
  }

  setCurrentClass() {
    this.currentClass = {
      foo: true,
      bar: true,
      baz: false,
    };
  }

  setCurrentStyle() {
    this.currentStyle = {
      fontSize: '30px',
      color: 'red'
    };
  }

  inputChange(el) {
    console.log(el.value, el.getAttribute('value'));
  }

  clickHelpButton() {
    this.help = 'HELP';
  }

  alertInfo(event) {
    console.log(event);
  }
}
