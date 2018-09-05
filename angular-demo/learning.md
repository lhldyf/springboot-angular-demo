# angualr学习

## 前提之 npm 学习
中文文档地址：https://www.npmjs.com.cn
npm，可以理解是类似Maven的一个中心仓库，管理了任何开发者上传的通过编译的JavaScript组件，你在项目中的package.json（功能同pom.xml）中声明依赖后，执行npm install 即可下载相关依赖。

## 前提之 TypeScript学习
中文文档地址：https://www.tslang.cn/docs/home.html
TypeScript支持基于类(class)的面向对象编程，因此在写Angular的时候，会发现很多思想和Java类似，可以抽象出接口(interface)，实现(implements)接口，继承(extends)基类，将业务功能做合理抽象，举例：像后台管理系统的分页功能，就可以抽象出一个获取分页内容的接口，写一个基类做通用的实现，比如根据url获取分页内容，做响应异常处理等，分页控件、列表内容的展示继承该基类即可，对于所有的此类获取分页内容的页面，只需要差异化传入不同的url即可。demo里有这个例子，看例子比较好理解。


## Angular学习准备工作
中文文档地址：https://angular.cn

### 安装@angular/cli
@angular/cli 是官方提供的便于快速开发的命令工具，在创建组件，启动应用都有很大帮助
```
npm install -g @angular/cli
```

### 创建脚手架
之后很多操作依赖于@angular/cli，比如运行一下命令可快速创建一个脚手架
```
ng new my-app
```

### 启动服务
执行以下命令启动开发服务器，其中-o参数可以自动打开浏览器并访问`http://localhost:4200`
```
cd my-app
ng serve -o
```

### 创建组件
执行以下命令创建一个新的组件，这个非常方便，让我想知道vue.js是否也有这样的工具，自动生成组件并注册到AppModule。
```
ng generate component heroes
```

如此就创建了一个heroes的组件，可以看到app路径下多了一个heroes的文件夹，该文件夹下多了四个文件，该组件使用时的命名默认为app-heroes，当然你可以修改这个名字，在heroes.component.ts文件中定义的。另外cli还更新了app.modules.ts文件中的@NgModule的组件声明，其中会多了一个HeroComponent，需要注意的是每个组件都必须（且只能声明在）一个NgModule中，相比起来在vue.js里各种自己定义组件，声明依赖，真的是方便啊。

组件声明的语法看着也有点意思，实现一个`OnInit`的接口（真的定义的是interface，也真的是implements，组件还是class），如果是给外部用的组件，用的是export关键字，不同于Java的public，所以写Java的同学写angular会很有亲切感，说回来这个OnInit接口有两个方法，一个是`constructor()`方法，一个是`ngOnInit()`方法，这两个方法也能很好的映射到Java语言的语法，从英文含义就能理解，`constructor`是构造方法，你可以在该方法的入参中加入一些初始化参数，主要用于angular依赖注入（可以看注册服务会用到这个），`ngOnInit()`是angular语法中用于放初始化逻辑的方法，在创建完组件后调用该方法，类似Spring实现Initialize接口的init方法。


## 简单语法

### 变量声明
angular的变量声明，如果要定义类型，则把类型放在变量名后面，用冒号分隔，比如：`id : number`， `const HEROES : Hero[]`，除了变量的声明是这样，方法的声明也是这样的，比如 `getHeroes() : Hero[] { ... }`

### 变量输出
和vue.js类似，变量在页面展示使用的是`{{ variable }}`，一些变量在页面展示可能需要做一些简单的转化，angular提供管道符`|`，比如将变量显示为大写的写法 `{{ variable | uppercase }}`，其中的uppercase是语言的内置管道，也可以自己定义管道，后面再学习，这个可以考虑用来做页面code转码。

### 双向绑定（一般与用户输入双向绑定）
语法：`[(ngModel)]="variable"`，这是angular的语法，不过默认是不启用，ngModel从属于FormsModule（此时如果传入的数据是基本数据类型，子组件中对数组做任何操作都不会影响到父组件，但如果传入的不是基本数据类型，而是引用数据类型，则要格外注意子组件中对数据的操作可能会对父组件产生影响），因此需要在AppModule中手动添加依赖，和Java的添加依赖很类似，需要先写import语句，然后在@ngModule中声明imports

### 单向绑定
语法：`[parameter]="variable"`，

### 循环语句
语法：`*ngFor`，有点像Java的foreach语法不过是写在标签上，和vue.js也是很类似，相当于直接可以看到是对标签的循环，比如`<li *ngFor="let hero of heroes">`，其中let是js中变量类型的定义，好像和var是一个含义吧，hero是对每个迭代对象的命名，heroes是被迭代的对象。

###  条件语句
语法：`*ngIf`，这个语法和vue.js是一样的，比如`<div *ngIf="selectHero">content<div>`，那么当selectHero为false或者为空时，就不会展示content这个内容，当selectHero不为空且不为false时，会加载div这个dom，并展示content。

### 父子组件
angular的组件都是注册到了AppModule中，因此像<app-hero-detail></app-hero-detail>这种自定义组件的使用无需额外声明（cli创建组件时会自动注册），父子组件需要解决传递参数的问题，angular的语法是通过一个`@Input`装饰器，这样就能接受从父组件传递过来的参数。使用时记得在子组件声明import Input组件，定义例子：`@Input() hero : Hero`。

### 


