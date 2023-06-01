let hrs_disp = document.querySelector('.hrs .display');
let mins_disp = document.querySelector('.mins .display');
let secs_disp = document.querySelector('.secs .display');
let meredian = document.querySelector('.meredian');

const updateClock = () => {
    const date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let pm = hrs >= 12;
    hrs %= 12;

    hrs = hrs < 10 ? ("0" + hrs) : hrs;
    mins = mins < 10 ? ("0" + mins) : mins;
    secs = secs < 10 ? ("0" + secs) : secs;

    hrs_disp.textContent = hrs;
    mins_disp.textContent = mins;
    secs_disp.textContent = secs;
    meredian.textContent = pm ? "PM" : "AM";
    
    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();