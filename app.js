const date = document.querySelector('#number'),
month = document.querySelector('#month'),
year = document.querySelector('#year'),
btn = document.querySelector('#btn'),
span = document.querySelector('#result');


btn.addEventListener('click', ()=>{
    let  dataObj = new Date(`${date.value} ${month.value} ${year.value}`);
    console.log(dataObj)
    let day = dataObj.toString();
    let name = day.slice(0,3);
    switch(name){
        case 'Mon': span.innerHTML = 'Monday'
        break;
        case 'Tue': span.innerHTML = 'Tuesday'
        break;
        case 'Wed': span.innerHTML = 'Wednesday'
        break;
        case 'Thu': span.innerHTML = 'Thursday'
        break;
        case 'Fri': span.innerHTML = 'Friday'
        break;
        case 'Sat': span.innerHTML = 'Saturday'
        break;
        case 'Sun': span.innerHTML = 'Sunday'
        break;
    }
    
    
})