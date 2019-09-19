console.log('class继承');

// 这是父类
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

class American extends Person{
  constructor(name,age){
    // 1. 为什么一定要在constructor中调用super（因为如果一次子类通过extends继承了父类，那么在子类中constructor必须手动优先调用super函数）
    // 2. super是个什么东西（super是一个函数，而且它是父类的构造器，子类中的super就是父类中constructor中的一个引用，类似于php的parent::_constructor）
    // 3. 为什么我们调用了super，对象数据就没了
    super(name,age)
  }
}

const a1 = new American('Jack', 22)
console.log('a1', a1)

class Chinese extends Person{

}

const c1 = new Chinese('张思', 25)
console.log('c1', c1);