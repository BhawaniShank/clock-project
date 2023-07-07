function show_clock(){
let h = document.getElementsByClassName('hr')[0];
let m = document.getElementsByClassName('mn')[0];
let s = document.getElementsByClassName('ss')[0];
let date = new Date();

let hours = date.getHours();
let minuts = date.getMinutes();
let seconds = date.getSeconds();

h.style.transform = `rotate(${30 * hours + minuts/2}deg)`;
m.style.transform = `rotate(${6 * minuts}deg)`;
s.style.transform = `rotate(${6 * seconds}deg)`;

let sound = new Audio('sound.mp3');
sound.play();

}
setInterval(show_clock, 1000);