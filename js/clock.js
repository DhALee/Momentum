const clock = document.querySelector("h2#clock");


function sayHello() {
    console.log("hello");
}

function getClock() {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); // 1000ms == 1s

// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);