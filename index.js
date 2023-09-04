const user = {
  firstName: "John",
  age: 27,
  favoriteMusic: "Rock",
  address: {
    street: "Super Cool St",
    number: 123,
    city: "Miami",
    email: {
      a: "firstEmail@example.com",
      b: "secondEmail@example.com",
    },
  },
};

// const name= user.name;
// const age = user.age;
// const favoriteMusic = user.favoriteMusic;

//array destructuring examples

//ES5 adding new property as a variable
// user.country ="Spain"
//ES6 added directly in the destructured value
// changing name directly in between {} example: favoriteMusic: music
// let { firstName, age, favoriteMusic: music, country = "Spain" } = user;

//destructure nested properties
const {
  firstName,
  address: { street, city },
} = user;
// const {street, city} = address;

//multiple nesting layers
// const {
//   address: {
//     email: { a, b },
//   },
// } = user;
// const {email} = address;
// const {a,b} = email;

const message = `Hello my name is ${firstName} and I am ${age} old, I live in ${country} and I like to listen to ${music}`;
console.log(message);
console.log(firstName, address);
console.log(a, b);
