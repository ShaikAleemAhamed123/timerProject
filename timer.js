let second = 1000;
let minute = 60 * second;
let hour = 60 * minute;
let day = 24 * hour;

let target = "Oct 23, 2021 19:00:00";
let countdown = new Date(target).getTime();


function distancef() {
    let now = new Date().getTime();
    let distance = countdown - now;

    if(distance<=0){
        let headline=document.getElementById('header');
        let counter=document.querySelector('.items');
        counter.style.display='none';
        headline.innerText="COUNTER UP !";
    }
     else{
    document.getElementById('day').innerText = Math.floor(distance / day);;

    
    document.getElementById('hour').innerText = Math.floor((distance % day) / hour);

   
    document.getElementById('minute').innerText = Math.floor((distance % hour) / minute);

   
    document.getElementById('second').innerText = Math.floor((distance % minute) / second);
     }

    


}

setInterval(distancef, 1000);
