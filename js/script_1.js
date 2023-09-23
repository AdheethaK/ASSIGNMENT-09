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
var flag = true;
// $("#stop").on('click',()=>{
//     flag = false;
// })
do{
    setTimeout(myFunction_1,t);
    setTimeout(myFunction_2,t+=300);
    setTimeout(myFunction_3,t+=300);
    setTimeout(myFunction_4,t+=300);
    setTimeout(myFunction_5,t+=300);
    setTimeout(myFunction_6,t+=300);
    setTimeout(myFunction_7,t+=300);
    setTimeout(myFunction_8,t+=300);
}while(flag);
// for (var i = 0; i < 10; i++) {
//     setTimeout(myFunction_1,t);
//     setTimeout(myFunction_2,t+=300);
//     setTimeout(myFunction_3,t+=300);
//     setTimeout(myFunction_4,t+=300);
//     setTimeout(myFunction_5,t+=300);
//     setTimeout(myFunction_6,t+=300);
//     setTimeout(myFunction_7,t+=300);
//     setTimeout(myFunction_8,t+=300);
// }
// $("#start").on('click',()=>{
//     $("#box-1").css("opacity","1");
// });
