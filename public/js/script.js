const secondHand = document.querySelector('.seconds-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digital = document.querySelector('.digital-time');
const hand = document.querySelector('.hand');

function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    
    const hour = now.getHours();
    const hourDegrees = (((hour / 12) * 360) + 90) + (minutes / 2);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    
    // -----------------------
    // --- Show digital time
    // -----------------------

    digital.innerHTML = now.toLocaleString('en-us', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit'});
    

    // -------------------------------------------------------
    // --- Remove transition to fix the weird flutter effect
    // -------------------------------------------------------

    if (!seconds) {
        hand.style.transition = '';
    }
}

setInterval(setDate, 1000);