/*
const person = {
  name: 'Test',
  walk() {
    console.log(this)
  },
}
*/

class Person {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log('walk')
  }
}

const person = new Person('Can')
person.walk()
