function upadteDate(){
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();
    var setDate = document.getElementById("setDate");
    setDate.innerHTML = date.getDate() +"/"+ parseInt(date.getMonth()+1) +"/"+ date.getFullYear();
}
setInterval(upadteDate,100)
onload = upadteDate();

function getColor(){
    var color = document.getElementById("setColor").value;
    localStorage.setItem("color",color);
    document.getElementById("time").style.background = localStorage.getItem("color");
    document.getElementById("body").style.background = localStorage.getItem("color");
}
function setColor(){
    document.getElementById("setColor").value = localStorage.getItem("color");

    document.getElementById("time").style.background = localStorage.getItem("color");
    document.getElementById("body").style.background = localStorage.getItem("color");
}
setInterval(setColor(),100)