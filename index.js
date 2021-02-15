const lodash = require('lodash')
const data1 = [
    {
      "age": 3,
      "name": "Curtis Greene",
      "email": "curtis.greene@zaj.ca",
    },
    {
      "age": 23,
      "name": "Nikki Lowe",
      "email": "nikki.lowe@darwinium.tv",
    },
    {
      "age": 39,
      "name": "Barr Copeland",
      "email": "barr.copeland@nipaz.me",
    },
];
const data2 = [
    {
      "age": 29,
      "name": "Calhoun Woodward",
      "email": "calhoun.woodward@medmex.info",
    },
    {
      "age": 21,
      "name": "Leta Lee",
      "email": "leta.lee@qnekt.com",
    },
    {
      "age": 40,
      "name": "James Dinh",
      "email": "j.dink@erw.com",
    }
];
// Task 1
let indexUser = lodash.findIndex(data1, function(item) {
    return item.age === 23
})
console.log(indexUser);
    
// Task 2
let concatenateArray = lodash.concat(data1, data2)
console.log(concatenateArray);

// Task 3
const copyArray = lodash.pick(data2[1], 'name', 'email')
console.log(copyArray);


// Task 4
delete data2[1].age
let newArray = data2[1]
console.log(newArray);
