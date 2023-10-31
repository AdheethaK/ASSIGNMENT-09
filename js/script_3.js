//variable to store our intervalID
var nIntervalID;

function change_color(){
    //check if an interval has already been set up
    if(!nIntervalID){
        nIntervalID = setInterval(flash_text,1000)
    }
}

function flash_text(){
    const oElm = document.getElementById("my_box");
    oElm.className = oElm.className === "go" ? "stop" :"go";
}

function stop_text_color(){
    clearInterval(nIntervalID);

    //release our intervalID from variable
    nIntervalID = null;
}

document.getElementById("start")
    .addEventListener("click",change_color);

document.getElementById("stop")
    .addEventListener("click",stop_text_color);