dayElement = document.querySelector('.day');
hourElement = document.querySelector('.hour');
minElement = document.querySelector('.min');
secElement = document.querySelector('.sec');

setInterval(()=>{
    let now = new Date();
    day = now.getDate();
  
    dayElement.innerText = day - now.getDate();
    hourElement.innerText = 23 - now.getHours();
    minElement.innerText = 60 - now.getMinutes();
    secElement.innerText = 60 -now.getSeconds();
}, 1000)

