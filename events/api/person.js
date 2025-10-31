    const person = {
      name: "Alice",
      greet: function() {
        console.log(`Hello, my name is ${this.name}`);
      }
    };

    const unboundGreet = person.greet;
    unboundGreet();

    const boundGreet = person.greet.bind(person);
    boundGreet();


console.log(Math.PI)
console.log(Math.PI=5)
