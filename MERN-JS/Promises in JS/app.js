// console.log('task 1')
// console.log('task 2')
// console.log('task 3')

// let start = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log('task 2')
//         resolve()
//     }, 3000);
// })


// start.then(()=>{
//     console.log('task 3')
// })


//fetch => fetch data from url, principle: promise
// fetch("")

// fetch('https://type.fit/api/quotes')



// let randomquote = Math.floor(Math.random() * 15)
// console.log(randomquote)
// fetch("https://type.fit/api/quotes").then((data) => {
//     // console.log(data)
//     return data.json()
// }).then((data) => {
//     console.log(data[randomquote].text)
// })


function display() {
    let randomquote = Math.floor(Math.random() * 15)
    console.log(randomquote)
    fetch("https://type.fit/api/quotes").then((data) => {
        // console.log(data)
        return data.json()
    }).then((data) => {
            document.getElementById('quote').innerText = data[randomquote].text
            document.getElementById('author').innerText = data[randomquote].author

    })

}


display()



