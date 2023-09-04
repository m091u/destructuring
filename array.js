// const campuses = ['madrid', 'barcelona', 'miami', 'paris'];

// const madrid = campuses[0];
// const barcelona = campuses[1];

// const [a, b, c, d="paris"] = campuses;

//reach specific value using coma to skip a value

// const [, , campus3] = campuses;
// console.log(campus3); // <== miami
// console.log(campuses);

// nested arrays
const europeanCampuses = [
  ["madrid", "es"],
  ["barcelona", "es"],
  ["berlin", "de"],
  ["paris", "fr"],
  ["amsterdam", "nl"],
  ["lisbon", "pt"],
];

const [[city1, lang1], [city2, lang2]] = europeanCampuses;
console.log (europeanCampuses)

// practice1
// const [a, b] = [1];
// console.log(a * b); // <== Nan

//practice2
// const [a, b = 1] = [2];
// console.log(a * b); // <== 2

//practice3
// let [a, b = 2, c, d = 1] = [3, 4, 5];
// console.log(a, b, c, d); // ==> ???


