const greetPeople = (people) => {
  let greeting = 'Hello ';

  for (let person in people) {
    people[person] = greeting + people[person];
    
  }
  return people;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');
assert.deepStrictEqual(greetPeople(parameter), result);