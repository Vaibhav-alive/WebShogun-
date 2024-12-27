let arr = ['Zoro', 'Sanji', 'Nami', 'Usopp', 'Luffy', 'Madara', 'Garp', 'Naruto', 'Sasuke', 'Kakashi', 'Hinata', 'Kiba']
// console.log(arr)
// console.log(arr[9])

arr[0] = 'Rorona Zoro'
// console.log(arr)
let users = [
    {name: 'Rorona zoro', email: 'piratehunter@gmail'},
    {name: 'MonkeyDluffy', email: 'pirate@gmail'},
    {name: 'Uchiha Sasuke', email: 'Uchiha@gmail'},
]
// console.log(users[0].name)

let random = Math.floor(Math.random()*users.length)
console.log(users[random])
