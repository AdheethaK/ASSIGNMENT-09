var opacity_1 = 1;
var opacity_2 = 0.8;
var opacity_3 = 0.6;
var opacity_4 = 0.4;
var opacity_5 = 0.2;
var opacity_6 = 0;

// $("#box-1").css("opacity",opacity_6);
// $("#box-2").css("opacity",opacity_6);
// $("#box-3").css("opacity",opacity_6);
// $("#box-4").css("opacity",opacity_6);
// $("#box-5").css("opacity",opacity_6);
const myFunction_1 = () =>{
    $("#box-1").css("opacity",opacity_2);
    $("#box-2").css("opacity",opacity_1);
    $("#box-3").css("opacity",opacity_6);
    $("#box-4").css("opacity",opacity_6);
    $("#box-5").css("opacity",opacity_6);
}
const myFunction_2 = () =>{
    $("#box-1").css("opacity",opacity_6);
    $("#box-2").css("opacity",opacity_2);
    $("#box-3").css("opacity",opacity_1);
    $("#box-4").css("opacity",opacity_6);
    $("#box-5").css("opacity",opacity_6);
}
const myFunction_3 = () =>{
    $("#box-1").css("opacity",opacity_6);
    $("#box-2").css("opacity",opacity_6);
    $("#box-3").css("opacity",opacity_2);
    $("#box-4").css("opacity",opacity_1);
    $("#box-5").css("opacity",opacity_6);
}
const myFunction_4 = () =>{
    $("#box-1").css("opacity",opacity_6);
    $("#box-2").css("opacity",opacity_6);
    $("#box-3").css("opacity",opacity_6);
    $("#box-4").css("opacity",opacity_2);
    $("#box-5").css("opacity",opacity_1);
}
const myFunction_5 = () =>{
    $("#box-1").css("opacity",opacity_6);
    $("#box-2").css("opacity",opacity_6);
    $("#box-3").css("opacity",opacity_6);
    $("#box-4").css("opacity",opacity_1);
    $("#box-5").css("opacity",opacity_2);
}
const myFunction_6 = () =>{
    $("#box-1").css("opacity",opacity_6);
    $("#box-2").css("opacity",opacity_6);
    $("#box-3").css("opacity",opacity_1);
    $("#box-4").css("opacity",opacity_2);
    $("#box-5").css("opacity",opacity_6);
}
const myFunction_7 = () =>{
    $("#box-1").css("opacity",opacity_6);
    $("#box-2").css("opacity",opacity_1);
    $("#box-3").css("opacity",opacity_2);
    $("#box-4").css("opacity",opacity_6);
    $("#box-5").css("opacity",opacity_6);
}
const myFunction_8 = () =>{
    $("#box-1").css("opacity",opacity_1);
    $("#box-2").css("opacity",opacity_2);
    $("#box-3").css("opacity",opacity_6);
    $("#box-4").css("opacity",opacity_6);
    $("#box-5").css("opacity",opacity_6);
}
var t = 500;
let nIntervalId;
function kitt_activate(){
    //check if the interval is already used
    if(!nIntervalId){
        nIntervalId = setInterval(kitt,0)
    }
}
let timeoutId_1 ;
let timeoutId_2 ;
let timeoutId_3 ;
let timeoutId_4 ;
let timeoutId_5 ;
let timeoutId_6 ;
let timeoutId_7 ;
let timeoutId_8 ;
function kitt(){
    timeoutId_1=setTimeout(myFunction_1,t);
    timeoutId_2=setTimeout(myFunction_2,t+=50);
    timeoutId_3=setTimeout(myFunction_3,t+=50);
    timeoutId_4=setTimeout(myFunction_4,t+=50);
    timeoutId_5=setTimeout(myFunction_5,t+=50);
    timeoutId_6=setTimeout(myFunction_6,t+=50);
    timeoutId_7=setTimeout(myFunction_7,t+=50);
    timeoutId_8=setTimeout(myFunction_8,t+=50);
}

function stop(){
    clearInterval(nIntervalID);

    //clear timeouts
    clearTimeout(timeoutId_1);
    clearTimeout(timeoutId_2);
    clearTimeout(timeoutId_3);
    clearTimeout(timeoutId_4);
    clearTimeout(timeoutId_5);
    clearTimeout(timeoutId_6);
    clearTimeout(timeoutId_7);
    clearTimeout(timeoutId_8);

    //release our intervalID from the variable
    nIntervalId = null;
}
// $("#start").on('click',()=>{
//     for (var i = 0; i < 100; i++) { //10
//         setTimeout(myFunction_1,t);
//         setTimeout(myFunction_2,t+=300);
//         setTimeout(myFunction_3,t+=300);
//         setTimeout(myFunction_4,t+=300);
//         setTimeout(myFunction_5,t+=300);
//         setTimeout(myFunction_6,t+=300);
//         setTimeout(myFunction_7,t+=300);
//         setTimeout(myFunction_8,t+=300);
//     }
// });

var audio = new Audio('/audio/knight-rider.mp3');

$("#start").on('click',()=>{
    kitt_activate();
    audio.play();
});
$("#stop").on('click',()=>{
    clearInterval(nIntervalId)
    audio.pause();
});

