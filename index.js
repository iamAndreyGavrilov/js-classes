// class Car {
//   constructor(brand, color) {
//     this.brand = brand
//     this.color = color
//   }
//   start(){
//     console.log(`${this.brand} - start!`)
//   }
//   stop(){
//     console.log(`${this.brand} - STOP!`)
//   }
//
//   static discount(){
//     console.log('Скидка 10%!')
//   }
//   set rating(value){
//     this.score = value.toUpperCase()
//   }
//
//   get rating(){
//     return this.score
//   }
// }
//
// const tesla = new Car('tesla','silver')
// const nissan = new Car('nissan','silver')
//
// tesla.start()
// nissan.stop()
// Car.discount()
// tesla.rating = 'five'
//
// console.log(tesla.rating)

class Car {
  constructor(brand) {
    this.brand = brand
    this.gasTank = 100
    this.zapravka = []
  }

  getGas(){
    this.gasTank += 10
    const stamp = Date.now()
    const time = new Date(stamp)
    this.zapravka.push(time.toString())
    return this.gasTank
  }

  drive(){
    this.gasTank -= 10
    return this.gasTank
  }
}

class HybridCar extends Car {
  constructor(brand, model) {
    super(brand); //Car(brand)
    this.model = model
  }

  autoPark(){
    console.log('autoPark')
  }

}

const nissan = new Car('Nissan')
const lexus = new HybridCar('lexus', 'LX')

nissan.drive()
nissan.getGas()

console.log(nissan)
console.log(lexus.autoPark())