const btnStop = document.querySelector('#btn-stop');
const btnStart = document.querySelector('#btn-start');
const hinhHoa = document.querySelector('#hinh');
let whellTimeout;
let angle = 0;
// const clock = document.querySelector('#clock');
btnStop.addEventListener('click',function(){
clearTimeout(whellTimeout);
})
btnStart.addEventListener('click',function(){
wheelSpin();
})
function wheelSpin(){
    whellTimeout = setTimeout(function rotate(){
        angle += 5;
        hinhHoa.style.transform = `rotate(${angle}deg)`;
        whellTimeout=setTimeout(rotate,100);
    },100);
}
wheelSpin();

// function sayhi(){
//     alert('hello');
// }
// let timeIntervalId = setInterval(sayhi,3000);
// let timeIc = 1000;
// let timer = setTimeout(function sayHi(){
//     alert('hello');
//     timeIc += 1000;
// //     timer= setTimeout(sayHi,timeIc);
// },1000);
// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
function clock(){
var clock = document.getElementById("clock")
var d = new Date();
clock.innerHTML = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
}
var dem = setInterval(clock,1000);
