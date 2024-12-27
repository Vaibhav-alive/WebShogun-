const users = [
    {
      firstName: "Aarav",
      lastName: "Patel",
      gender: "Male",
      age: 25
    },
    {
      firstName: "Isha",
      lastName: "Gupta",
      gender: "Female",
      age: 22
    },
    {
      firstName: "Vikram",
      lastName: "Sharma",
      gender: "Male",
      age: 30
    },
    {
      firstName: "Neha",
      lastName: "Mehta",
      gender: "Female",
      age: 28
    },
    {
      firstName: "Rohan",
      lastName: "Verma",
      gender: "Male",
      age: 27
    },
    {
      firstName: "Priya",
      lastName: "Reddy",
      gender: "Female",
      age: 24
    },
    {
      firstName: "Amit",
      lastName: "Kumar",
      gender: "Male",
      age: 35
    },
    {
      firstName: "Anjali",
      lastName: "Singh",
      gender: "Female",
      age: 21
    },
    {
      firstName: "Rajesh",
      lastName: "Joshi",
      gender: "Male",
      age: 29
    },
    {
      firstName: "Sakshi",
      lastName: "Nair",
      gender: "Female",
      age: 26
    }
  ];
  

// console.log(users)

// let firstNames = users.forEach((user) =>{
//     console.log(user.firstName)
// })

let g = users.filter((n) => {
    return n.gender == "Female"
})

// console.log(g)

// let fg = g.forEach((f) => {
//     console.log(f.firstName)
// })

// let m = users.filter((n) => {
//     return n.gender == "Male"
// }).map((users) => {
//     return users.firstName
// }).filter((users) => {
//     return users.age > 26;
// })

// console.log(m)


let m = users.filter((user) => {
    if(user.gender == "Male" && user.age > 26){
        return user;
    }
}).map((user) => {
  return user.firstName;
})

console.log(m)

