function updateClock(){
    const clockEl = document.getElementById('clock');
    if(!clockEl) return;

    const now = new Date();
    let hours = now.getHours();
    const minutes = string(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hours = hours % 12;
    hours = hours ? hours : 12;
    clockEl.innerText = `${hours}:${minutes} ${ampm}`;
}

updateClock();
setInterval(updateClock, 1000);