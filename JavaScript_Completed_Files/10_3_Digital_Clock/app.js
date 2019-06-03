// Indian Watch
let indianWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Asia/Kolkata'};
    let indianTime = today.toLocaleTimeString('en-US',options);
    let indianDate = today.toLocaleDateString('it-IT',options);
    document.querySelector('#indian-date').innerText = indianDate;
    document.querySelector('#indian-time').innerText = indianTime;
};
setInterval(indianWatch,1000);

// USA Watch
let USAWatch = () => {
    let today = new Date();
    let options = {timeZone : 'America/New_York'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    document.querySelector('#usa-date').innerText = date;
    document.querySelector('#usa-time').innerText = time;
};
setInterval(USAWatch,1000);

// China Watch
let chinaWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Asia/Shanghai'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    document.querySelector('#china-date').innerText = date;
    document.querySelector('#china-time').innerText = time;
};
setInterval(chinaWatch,1000);