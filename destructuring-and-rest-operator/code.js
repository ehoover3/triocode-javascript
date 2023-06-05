let heroes = {
    batman: {
      name: "Bruce Wayne",
      home: "Gotham",
    },
    superman: {
      name: "Clark Kent",
      home: "Fortress of Solitude",
    },
  };
  
  // DESTRUCTURING AN OBJECT
  
  // Option A
  let batman = heroes.batman;
  let superman = heroes.superman;
  
  // Option B - destructure an object
  // let { batman, superman, flash } = heroes;
  
  // Console Log the Results
  console.log(batman);
  console.log(superman);
  
  ///////////////////////////////////////////////
  
  // DESTRUCTURING AN ARRAY
  
  let animals = [
    {
      name: "Fido",
      breed: "Dog",
    },
    {
      name: "Whiskers",
      breed: "Cat",
    },
  ];
  
  // Option A
  // let fido = animals[0];
  // let whiskers = animals[1];
  
  // Option B - destructure an array
  // let [fido, whiskers] = animals;
  
  // Console Log the Results
  // console.log(fido);
  // console.log(whiskers);
  
  ///////////////////////////////////////////////
  
  // REST OPERATOR
  
  // Option A
  // function addNumbers(a, b, d, e, f, g, h) {
  //   let sum = a + b + d + e + f + g + h;
  //   return sum;
  // }
  
  // Option B - rest operator
  // function addNumbers(...numbers) {
  //   let sum = 0;
  //   numbers.forEach((n) => (sum += n));
  //   return sum;
  // }
  
  // let total = addNumbers(10, 15, 5, 100, 5000, -110, -20);
  // console.log(total);
  
  ///////////////////////////////////////////////
  
  /// SPREAD OPERATOR
  
  let admins = ["Abed", "Eli", "Niketta"];
  let customers = ["Melissa", "Rohan", "Amna"];
  
  // Option A
  // let allUsers = [admins[0], admins[1], admins[2], customers[0], customers[1], customers[2]];
  
  // Option B - spread operator
  // let allUsers = [...admins, ...customers];
  
  // console.log(allUsers);