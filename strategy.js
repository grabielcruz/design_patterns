function Car() {
  this.getFuelType = () => {
    return "gasoline"
  }
}

function Plane() {
  this.getFuelType = () => {
    return "jet fuel"
  }
}

function Truck() {
  this.getFuelType = () => {
    return "diesel"
  }
}

function VehicleStrategy() {
  this.strategy
  this.setStrategy = (strategy) => {
    this.strategy = strategy
  }

  this.getFuelType = () => {
    return this.strategy.getFuelType()
  }
}

const myCar = new Car();
const myPlane = new Plane();
const myTruck = new Truck();

const myStrategy = new VehicleStrategy()
myStrategy.setStrategy(myCar)
console.log(myStrategy.getFuelType())
myStrategy.setStrategy(myPlane)
console.log(myStrategy.getFuelType())
myStrategy.setStrategy(myTruck)
console.log(myStrategy.getFuelType())
