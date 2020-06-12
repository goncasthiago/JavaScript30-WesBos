const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();
    const secondsDegress = ((seconds / 60) * 360) + 90;
    const minDegress = ((min/60)*360)+90;
    const hourDegress = ((hour/12)*360)+90;
    secondHand.style.transform = `rotate(${secondsDegress}deg)`;
    minHand.style.transform = `rotate(${minDegress}deg)`;
    hourHand.style.transform = `rotate(${hourDegress}deg)`;

}
setInterval(setDate,1000);