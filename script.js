var time = document.getElementsByTagName("p")[0];
var time_1 = document.getElementsByTagName("p")[1];
var time_2 = document.getElementsByTagName("p")[2];
var time_3 = document.getElementsByTagName("p")[3];
var time_4 = document.getElementsByTagName("p")[4];
var time_6 = document.createElement("p"); 
let icon = document.getElementById("icon");

document.querySelector(".numbers").appendChild(time_6);

var date_1 = document.getElementsByTagName("h6")[0];
var date_2 = document.getElementsByTagName("h6")[1];
var date_3 = document.getElementsByTagName("h6")[2];
var date_4 = document.getElementsByTagName("h6")[3];
var date_5 = document.getElementsByTagName("h6")[4];

setInterval(handler, 1000);
setInterval(trocaIcone, 1000 * 1800);

function handler() {
    var date = new Date();
    var hour = date.getHours();
    var mint = date.getMinutes();
    var sec = date.getSeconds();
    
    time.innerHTML = `${hour}`;
    time_1.innerHTML = ":";
    if(mint<=9){
        time_2.innerHTML = `0${mint}`;
    }
    else{
        time_2.innerHTML = `${mint}`;

    }
    time_3.innerHTML = ":";
    time_4.innerHTML = `${sec}`;

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    
    date_1.innerHTML = `${month}`;
    date_2.innerHTML = " - ";
    date_3.innerHTML = `${day}`;
    date_4.innerHTML = " - ";
    date_5.innerHTML = `${year}`;

}

function trocaIcone(){
    if(hour >18){
        icon.classList.remove("bi bi-brightness-alt-high-fill");
        icon.classList.add("bi bi-moon-fill");
    }
    else{
        icon.classList.remove("bi bi-moon-fill");
        icon.classList.add("bi bi-brightness-alt-high-fill");
    }
}
