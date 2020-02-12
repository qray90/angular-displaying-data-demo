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

事件简写：
```html
<button (click)="handleClick($event)"></button>

<button on-click="handleClick($event)"></button>
```

第一种双向绑定（属性事件双向绑定）：
```html
<input
  [value]="currentInput"
  (input)="currentInput = $event.target.value"
/>

```

# 7. 自定义事件


