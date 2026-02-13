function showou1(){

    document.getElementById("btn1").style.display = "block"
    document.getElementById("btn2").style.display = "none"
    document.getElementById("btn3").style.display = "none"
    document.getElementById("btn4").style.display = "none"
};

document.getElementById("h3js1").addEventListener("click", showou1);

function showgame2(){

    document.getElementById("btn1").style.display = "none"
    document.getElementById("btn2").style.display = "block"
    document.getElementById("btn3").style.display = "none"
    document.getElementById("btn4").style.display = "none"
};

document.getElementById("h3js2").addEventListener("click", showgame2);

function showhallo3(){

    document.getElementById("btn1").style.display = "none"
    document.getElementById("btn2").style.display = "none"
    document.getElementById("btn3").style.display = "block"
    document.getElementById("btn4").style.display = "none"
};

document.getElementById("h3js3").addEventListener("click", showhallo3);

function showgoed4(){

    document.getElementById("btn1").style.display = "none"
    document.getElementById("btn2").style.display = "none"
    document.getElementById("btn3").style.display = "none"
    document.getElementById("btn4").style.display = "block"
};

document.getElementById("h3js4").addEventListener("click", showgoed4);