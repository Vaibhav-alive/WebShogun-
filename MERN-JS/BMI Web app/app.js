bmi = []

function res(){
    h = document.getElementById('h').value,
    w = document.getElementById('w').value
    
    let data = h/(w*w)
    
    bmi.push(data)

    
    
    display_res()

}

function display_res(){
    d = document.getElementById('res-alert')
    d.classList.remove('res')
    d.classList.add('res-alert')

    setTimeout(() => {
        d.classList.remove('res-alert')
        d.classList.remove('res')
    }, 2000);

    title = document.getElementById('title')
    title.innerHTML = 'The BMI is :  '+ bmi
    

    setTimeout(() => {
        title.innerHTML = ''
        bmi = []
    }, 2000);

   
    console.log(bmi)
}