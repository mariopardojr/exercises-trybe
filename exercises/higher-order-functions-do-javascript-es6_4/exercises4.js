const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

const filterPeople = (people) => {
  const born = (yearBorn) => yearBorn >= 1901 && yearBorn <= 2000;
  const origin = (origin) =>  origin === 'Australian';
  const australiaxXX = people.filter(({ bornIn, nationality }) => born(bornIn) && origin(nationality));
  return australiaxXX;
}

const filteredPeople = filterPeople(people)
console.log(filteredPeople)
assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })