const numbers = [5, 4, 3, 2]

function iterator(someIterable) {
  this.iterable = someIterable
  this.index = 0

  this.current = () => this.iterable[this.index]

  this.hasNext = () => this.index < this.iterable.length - 1
  this.next = () => {
    if (this.hasNext) {
      return this.iterable[++this.index]
    }
  }
  this.hasPrev = () => this.index > 0
  this.prev = () => {
    if (this.hasPrev) {
      return this.iterable[--this.index]
    }
  }
}

const myIterator = new iterator(numbers)
console.log(myIterator.current())
console.log(myIterator.hasNext())
console.log(myIterator.next())
console.log(myIterator.next())
console.log(myIterator.hasPrev())
console.log(myIterator.prev())
console.log(myIterator.next())
console.log(myIterator.next())
console.log(myIterator.hasNext())

