//JS functions and arrow functions

//conditionals
// age range: a<12 can't participate and a>=12 and 16 can participate
// between 16-20 can participate in senaior level
// a>20 can't participate

// let age = prompt("Pls enter your age");
// if (age<12){
//     console.log("Can't participate");
// }
// else if(age>=12 && age<=16){
//     console.log("Can particiapte")
// }
// else if(ag>16 && a<=20){
//     console.log("Can participate in senior level");
// }
// else{
//     console.log("Can't participate");
// }

//function is a reusable code used to perform same task when we want
// function grinder(items){
//     console.log('grinding...', items)
// }
// // let items = prompt("Pls enter how many items you want to grind");
// grinder('mangoes');
// grinder('onions');


// function add(a,b){
//     let sum = a+b;
//     return sum;
// }
// let sum1 = add(10,20);
// let sum2 = add(30,40);

// console.log(sum1, sum2)

function watched(){
    let title = document.getElementById('title')
    title.innerText = ('You have watched the masterpiece')
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}
// function hide(){
//     let btn = document.getElementsByClassName('btn')
//     btn.style.display = 'none'
// }
