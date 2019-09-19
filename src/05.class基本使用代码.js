
function Person(name, age){
  this.name = name
  this.age = age
}

const pl = new Person('王多鱼', 18)
// console.log(pl)

// 使用class定义对象
class Animal{
  //构造器 每一个类中都有一个构造器 如果我们程序员没有手动指定构造器，那么可以认为类内部有个隐形的，看不见的空构造器，类似于constructor(){}
  // 构造器的作用，就是每当new这个类的时候，必然会有限执行构造器中的代码
  // 构造器的作用，就是每当new这个类的时候，必然会优先执行构造器
  // 通过new出来的实例，访问到的属性，叫做实例属性
  // 通过构造函数，直接访问到的属性，叫做静态属性
  constructor(name, age){
    this.name = name
    this.age = age
  }

  // 在class内，通过static修饰的属性，就是静态属性
  static info = "eee"
}

const a1 = new Animal('大黄', 3)
console.log(a1)
console.log(a1.info) // undefined
console.log(Animal.info) // eee  // info是Animal的静态属性