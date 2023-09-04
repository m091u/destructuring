const data = {
  name: {
    firstName: "ana",
    lastName: "marino",
  },
  isStudent: true,
  favoriteFootballTeam: "fc barcelona",
  hometown: {
    city: "buenos aires",
    country: "argentina",
  },
};

//   print student first and last name, favorite football club, as well as the city and the country this student is coming from

const {
  name: { firstName, lastName },
  favoriteFootballTeam,
  hometown: { city, country },
} = data;

const messsage = `${firstName} ${lastName} comes from ${city} in ${country} and is a supporter of ${favoriteFootballTeam}`;
console.log(messsage);
