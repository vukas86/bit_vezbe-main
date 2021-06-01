var mario = document.querySelector('.mario');
var world = document.querySelector('body');
var running = false;
var position = 0;
var int;

document.addEventListener('keydown', startRunning);
document.addEventListener('keyup', stopRunning);
document.addEventListener('keydown', jump);
document.addEventListener('keyup', fall);
document.addEventListener('keydown', reverse);
document.addEventListener('keyup', reverseStop);
document.addEventListener('keydown', startRunningBack);
document.addEventListener('keyup', stopRunningBack);



function startRunning(e) {
    if (e.keyCode === 39 && !running) {
        mario.classList.add('running');
        int = setInterval(() => {
            position -= 5;
            world.style.backgroundPosition = `${position}px bottom`;
        }, 5);
        running = true;
    }
}

function stopRunning(e) {
    if (e.keyCode === 39) {
        mario.classList.remove('running');
        clearInterval(int);
        running = false;
    }
}

function jump(e) {
    if (e.keyCode === 32) {
        mario.classList.add('jumping');
    }
}

function fall(e) {
    if (e.keyCode === 32) {
        mario.classList.remove('jumping');
    }
}
/* 

function reverse(e) {
    if (e.keyCode === 37) {
        mario.classList.add('reverse');
    }
}

function reverseStop(e) {
    if (e.keyCode === 37) {
        mario.classList.remove('reverse');
    }
} */

function reverse(e) {
    if (e.keyCode === 37 && !running) {
        mario.classList.add('running');
        mario.classList.toggle('reverse');
        int = setInterval(() => {
            position += 5;
            world.style.backgroundPosition = `${position}px bottom`;
        }, 5);
        running = true;
    }
}

function startRunningBack(e) {
    if (e.keyCode === 37 && !running) {
        mario.classList.add('running');
        int = setInterval(() => {
            position += 5;
            world.style.backgroundPosition = `${position}px bottom`;
        }, 5);
        running = true;
    }
}

function stopRunningBack(e) {
    if (e.keyCode === 39) {
        mario.classList.remove('running');
        clearInterval(int);
        running = false;
    }
}










