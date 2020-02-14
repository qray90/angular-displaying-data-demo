# 1. Property 和 attribute
1. HTML的attribute, DOM的property
2. 模板绑定的是Property，不是attribute
3. property可以变化，是当前值，attribute不发生变化，一般指定初始值
4. 形式上，property是驼峰，attribute是全小写或小写加中横线
```html
<!-- html -->
<input id="input" value="name" />
```
```js
/* js */
const input = document.getElementById('input')

console.log(input.value, input.getAttribute('value'))
```

# 2. 插值和模板绑定
1. 都不执行script标签
2. 插值把script标签显示出来
3. 模板绑定直接过滤掉script标签

# 3. 绑定属性
绑定方式
```
[attr.attrName]="some_value"
```

# 4. 类绑定
```html
<div [class.foo]="true"></div>

<div [class]="{ foo: true, bar: false}"></div>

<div [class]="['foo', 'bar']"></div>

```

# 5. 样式绑定
```html
<div [style.width]="100px"></div>

<div [style.width.px]="100"></div>

<div [style]="{color: 'red', background: 'black' }"></div>

<div [style]="['width', '100px']"></div>
```

# 6. 事件
绑定简写：
```html
<img bind-src="http://1.png">

<img [src]="http://1.png">

```

# 7. 自定义事件
```ts
const emitName = new EventEmitter<Item>()

this.emitName.emit(data: Item)

```
```html
<app-customer (emitName)="handleEmitName($event)"></app-customer>
```
# 7. 双向数据绑定
1. 双向绑定, 有size属性，sizeChange事件
```ts
@Input() size: string;
@OutPut() sizeChange = new EventEmitter<Item>()
```

```html
<app-customer
  [size]="currentInput"
  (sizeChange)="currentInput = $event.target.value"
></app-customer>
```

简写为：
```html
<app-customer [(app-customer)]="data"></app-customer>
```
2. 表单双向数据绑定(ngModel)
```html
<input [(ngModel)]="valueData" />>
```

# 8. 内置指令
1. 属性型
`ngClass` `ngStyle` `ngModel`

2. 结构性
`ngIf` `ngFor` `ngSwitch, ngSwitchCase, ngSwitchDefault`
- ngIf, ngFor前要加*， ngSwitch用绑定
- ngFor的微语法里面有个trackBy，类似于vue里面的key，只是是一个函数，需返回一个唯一值

# 9. 模板引用变量（#var或ref-var）
一般是对DOM元素的引用，还可以引用指令（包含组件）、元素、TemplateRef 或 Web Component 。

# 10. @Input / @Output别名
```ts
@Input(alias) property: any
@Output(alias) eventName = new eventEmitter<any>()
```

# 11. 响应式表单
1. 单个表单项 - `FormControl` - `formControlName`
2. 表单组 - `FormGroup` - `formGroupName`
3. 生成表单控件 - `FormBuilder`

要把表单组件变量与UI绑定，用`[formGroup]=xxxx`

```html
<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
  <label>
    First name:
    <input formControlName="firstName">
  </label><br>
  <label>
    Last name:
    <input formControlName="lastName">
  </label><br>

  <div formGroupName="address">
    <label>
      Street:
      <input type="text" formControlName="street">
    </label><br>

    <label>
      City:
      <input type="text" formControlName="city">
    </label>

  </div>

  <input type="submit" >
  <button (click)="patchProfile()">patch profile</button>
</form>
```
```ts
// 1. 采用FormBuilder创建
profileForm = this.formBuilder.group({
 firstName: [''], // 数组的第一项是初始值，第二第三分别是同步和异步验证器
 lastName: [''],
 address: this.formBuilder.group({
   street: [''],
   city: ['']，
 }),
});

// 2. 直接创建
profileForm = new FormGroup({
 firstName: new FormControl(''),
 lastName: new FormControl(''),
 address: new FormGroup({
   street: new FormControl(''),
   city: new FormControl(''),
 })
});
```

# 表单验证

