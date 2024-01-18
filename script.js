// const currentTime = new Date();
// const day = currentTime.getDay();
// const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const dayName = daysOfWeek[day];

// const hours = currentTime.getHours();
// const minutes = currentTime.getMinutes();
// const seconds = currentTime.getSeconds();

const dayT = document.getElementById('up');
const timeT = document.getElementById('down');


function createDay() {
    const day = new Date().getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = daysOfWeek[day];

    let h2 = document.createElement('h2');
    h2.innerHTML = dayName;
    document.getElementById('up').appendChild(h2);
}

function createTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    document.getElementById('down').innerHTML = `${hours}:${minutes}:${seconds}`;
}

createDay();
setInterval(createTime, 1000);

