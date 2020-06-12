function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`)
    if (!audio) return; //stop the function from running all together
    audio.currentTime = 0;

    audio.play();
    key.classList.add('playing');
}
function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip
    this.classList.remove('playing');
    //console.log(this)
}

const keys = Array.from(document.querySelectorAll('.key'));
//console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound);