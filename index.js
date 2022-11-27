class Animal {
  static type = 'ANIMAL'

  constructor(payload) {
    this.name = payload.name
    this.age = payload.age
    this.hasTail = payload.hasTail
  }

  voice() {
    console.log('I am animal')
  }
}

const animal = new Animal({ name: 'Animal', age: 5, hasTail: true })

console.log(animal.voice())

class Dog extends Animal {
  static type = 'DOG'
  constructor(payload) {
    super(  payload  );
  }
  voice() {
    console.log('I am dog')
  }

  get getInfo(){
    return this.age * 7
  }

  set setInfo(newAge){
    this.age = newAge
  }
}

const dog = new Dog({ name: 'Dog', age: 5, hasTail: true, color: 'black' })

console.log(dog.voice())
dog.setInfo = 10
console.log(dog.getInfo)
