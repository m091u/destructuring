// const reptiles = ["snake", "lizard", "alligator"];
// const mammals = ["puppy", "kitten", "bunny"];

// ES5 approach:
// const animals = reptiles.concat(mammals);

// ES6 approach using spread operator: Merging arrays
//takes a copy of the original array and does not modify original
//goes only 1 level deep, does not copy nested arrays
// const animals = [...reptiles, ...mammals];
// console.log(animals);
// [ 'snake', 'lizard', 'alligator', 'puppy', 'kitten', 'bunny' ]

//Copying arrays When we need to copy an array, we often times use .slice().
// const names = ["ana", "milo", "ivan"];
// const names2 = names.slice();

//using spread
// const names1 = ["ana", "milo", "ivan"];
// const names3 = [...names];
// console.log(names3); // => [ 'ana', 'milo', 'ivan' ]

//Rest parameter
// function myFunction(arg1, arg2) {
//   console.log(arg1);
//   console.log(arg2);
// }
// myFunction("first argument", "second argument");

//   function add() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i];
//     }
//     return sum;
//   }

//   add(); // 0
//   add(1); // 1
//   add(1, 2, 5, 8); // 16

// function add(...numbers) {
//   let sum = 0;
//   return numbers.reduce((sum, next) => {
//     return sum + next;
//   });
//   return sum;
// }
// add(1, 2, 5, 8); // <== 16

// const arr = [1, 2, 3, 4];
// const [first, ...rest] = arr;
// console.log(first, rest);

// mixed destructuring
const customer = {
    name: {
      firstName: 'ivan',
      lastName: 'zoro',
    },
    age: 32,
    preferences: [
      {
        tech: ['cameras', 'smartwatches'],
        books: ['science fiction', 'coding'],
      },
    ],
  };
  
  const {name: {firstName, lastName}, age, preferences: [{tech, books}]} = customer

  console.log(customer);

// const user = [
//   {
//     name: "A",
//     age: 37,
//     city: "Berlin",
//   },
//   {
//     name: "M",
//     age: 38,
//     city: "Berlin",
//   },
// ];
// const updatedUsers = users.map((user) => ({ ...user, city: "Sao Paolo" }));


